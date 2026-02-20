# GLB Walkthrough Viewer

OneDriveのGLBファイルをブラウザで歩き回れるウォークスルービューア。

## 🚀 GitHub Pagesへのデプロイ

### 1. リポジトリ作成
```bash
git init
git add index.html README.md
git commit -m "init: GLB walkthrough viewer"
git remote add origin https://github.com/あなたのユーザー名/glb-walkthrough.git
git push -u origin main
```

### 2. GitHub Pages 有効化
1. GitHubリポジトリ → **Settings** → **Pages**
2. Source: **Deploy from a branch**
3. Branch: `main` / `/(root)` → **Save**
4. 数分後に `https://あなたのユーザー名.github.io/glb-walkthrough/` で公開

---

## 📁 OneDriveでGLBを共有する方法

### OneDrive (個人)
1. GLBファイルを右クリック → **共有**
2. 「リンクを知っているすべてのユーザー」に設定
3. リンクをコピー → ビューアに貼り付け

> ⚠️ CORSエラーが出る場合は [cors.sh](https://cors.sh/) や [allorigins.win](https://allorigins.win/) プロキシ経由で試してください

### SharePoint / OneDrive for Business
管理者にCORSヘッダーの設定を依頼するか、GitHub Actionsで自動的にGLBをリポジトリへコピーする方法を検討してください。

---

## 🎮 操作方法

| キー | 動作 |
|------|------|
| `W A S D` / 矢印キー | 移動 |
| マウス | 視点変更 |
| `Space` | 上昇 |
| `Shift` | 下降 |
| `Esc` | ポインターロック解除 |
| クリック | 歩行モード開始 |

---

## 📷 GLB内カメラの使い方

BlenderなどでGLBにカメラを埋め込むと、左パネルに自動表示されます。

```
Blender → シーンにカメラを複数配置 → GLBエクスポート時「カメラ」にチェック
```

---

## 🔗 URLパラメータでGLBを指定

```
https://あなたのユーザー名.github.io/glb-walkthrough/?glb=https://...
```

このURLをQRコード化してタブレットやスマホでアクセスできます。

---

## ✅ 対応フォーマット

- `.glb` (推奨)
- `.gltf` + テクスチャ (同一オリジンのみ)
- Draco圧縮GLB 対応
