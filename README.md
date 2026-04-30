# 富士見横丁レトロ 会計アプリ

屋台向けオフライン会計アプリ。iPhoneのホーム画面から起動できます。

---

## iPhoneへの導入手順

### ステップ1：GitHubにファイルをアップロード

1. [github.com/nabe-yan/kaikei](https://github.com/nabe-yan/kaikei) を開く
2. 「Add file」→「Upload files」をクリック
3. 以下の3ファイルをドラッグ＆ドロップ：
   - `index.html`
   - `manifest.json`
   - `sw.js`
4. 「Commit changes」をクリック

### ステップ2：GitHub Pagesを有効化

1. リポジトリの「Settings」タブを開く
2. 左メニューの「Pages」をクリック
3. 「Branch」を `main` に設定して「Save」
4. 数分後に `https://nabe-yan.github.io/kaikei/` でアクセス可能になる

### ステップ3：iPhoneのホーム画面に追加（フェス前日に実施）

1. iPhoneのSafariで `https://nabe-yan.github.io/kaikei/` を開く
2. 画面下部の「共有」ボタン（四角に矢印のアイコン）をタップ
3. 「ホーム画面に追加」をタップ
4. 名前を確認して「追加」をタップ
5. ホーム画面に「横丁会計」アイコンが追加される

### ステップ4：フェス当日（ネットなしで使用）

1. ホーム画面の「横丁会計」アイコンをタップ
2. ネットなしで起動・動作します ✓

---

## 注意事項

- **初回アクセスはWi-Fi環境で行ってください**（Service Workerのキャッシュ保存のため）
- LINEのプレビューブラウザからは開かないでください（LocalStorageが制限されます）
- Safariの「履歴とWebサイトデータを消去」を実行するとデータが消えます

---

## ファイル構成

```
index.html    ← アプリ本体（CSS・JS・データすべてインライン）
manifest.json ← PWA設定（アプリ名・アイコン・テーマカラー）
sw.js         ← Service Worker（オフラインキャッシュ）
```

---

## アプリ更新方法

アプリを更新する場合：

1. `index.html` を修正する
2. `sw.js` の `CACHE_NAME` を `fujimi-yokocho-v2` のようにバージョンアップする
3. GitHubに3ファイルをアップロードし直す
4. iPhoneのSafariでURLにアクセスすると自動的に新しいバージョンに更新される
