// Service Worker for GLTF Walkthrough Viewer
const CACHE_NAME = 'gltf-viewer-v1';

// キャッシュするリソース（静的ファイル）
const STATIC_ASSETS = [
  './',
  './index.html',
  'https://cdn.jsdelivr.net/npm/nipplejs@0.10.2/distribution/nipplejs.min.js',
  'https://cdn.jsdelivr.net/npm/three@0.164.1/build/three.module.js',
];

// インストール時：静的アセットをキャッシュ
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(STATIC_ASSETS).catch(() => {
        // 一部のキャッシュに失敗しても続行
      });
    })
  );
  self.skipWaiting();
});

// アクティベート時：古いキャッシュを削除
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) => key !== CACHE_NAME)
          .map((key) => caches.delete(key))
      )
    )
  );
  self.clients.claim();
});

// フェッチ時：キャッシュファースト（オフライン対応）
self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);

  // GLBファイル・HDRファイルはキャッシュに保存（モデルデータ）
  const isBigAsset = /\.(glb|gltf|hdr|bin)$/i.test(url.pathname);

  if (isBigAsset) {
    // ネットワークファースト → キャッシュフォールバック
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          if (response.ok) {
            const clone = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
          }
          return response;
        })
        .catch(() => caches.match(event.request))
    );
    return;
  }

  // その他：キャッシュファースト
  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) return cached;
      return fetch(event.request).then((response) => {
        if (response.ok) {
          const clone = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
        }
        return response;
      }).catch(() => cached);
    })
  );
});
