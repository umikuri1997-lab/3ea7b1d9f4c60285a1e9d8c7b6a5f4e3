# GLTF ウォークスルー ビューア

iPad / iPhone / PC 対応の3Dウォークスルービューアです。

## フォルダ構成

```
/
├── index.html          ← ビューア本体（viewer.htmlをリネーム）
├── sw.js               ← Service Worker（オフライン対応）
├── models/             ← GLBモデルを配置
│   └── sample.glb
└── README.md
```

## 使い方

### モデルの表示方法

**URLパラメータで指定（おすすめ）:**
```
https://yourusername.github.io/your-repo/?model=./models/sample.glb
```

**ファイル選択:**
- iPad/iPhone: 「GLBファイルを選択」ボタンからファイルを選ぶ
- PC: ドラッグ＆ドロップ またはクリックで選択

### 操作方法

| デバイス | 視点回転 | 移動 |
|---------|---------|------|
| iPad/iPhone | 右側をドラッグ | 左下のジョイスティック |
| PC | クリックでロック → マウス移動 | WASD キー |

### カメラプリセット

- メニュー（☰）から「カメラプリセット」を開く
- 現在の視点を名前をつけて保存
- 保存したプリセットはブラウザに記憶される（localStorage）

## GitHub Pages 設定

1. GitHub のリポジトリ設定 → Pages → Source: `main` ブランチ の `/` (root) を選択
2. `viewer.html` を `index.html` にリネームしてリポジトリにプッシュ
3. `sw.js` も同じフォルダに配置

## アクセス制限

GitHub Pages の URL はリポジトリ名に依存します。
限られたユーザーのみへの共有には、**プライベートリポジトリ + GitHub Pages** は使えません
（Pages はパブリックのみ）。

代替案：
- **URLを長くする**: リポジトリ名を長くしてURLを推測されにくくする
- **Vercel / Netlify**: Basic認証が設定可能（無料プランあり）
