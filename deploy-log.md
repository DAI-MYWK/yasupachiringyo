# XServerデプロイ作業ログ

## 目的

Next.jsで作成した「やすパチHP」（ランディングページ）を、XServerのレンタルサーバーにデプロイして、`yasupachiringyo.jp` でアクセスできるようにする。

---

## 前提・環境

- **プロジェクト**: `/Users/miyawakidai/dev/CL/cl_一関市/yasupachihp`
- **フレームワーク**: Next.js 15.5.18 + TypeScript + Tailwind CSS
- **デプロイ先**: XServerレンタルサーバー（サーバー名: sv17068）
- **ドメイン**: `yasupachiringyo.jp`
- **WebFTPアクセスURL**: `https://webftp-sv17068.xserver.jp/`
- **公開ディレクトリ**: `/yasupachiringyo.jp/public_html/`

---

## 手順詳細

### STEP 1: next.config.mjs の変更

XServerは共有レンタルサーバーのため、Node.jsサーバーとしてではなく**静的HTMLとして出力**する必要がある。

**変更前:**
```js
const nextConfig = {
  output: 'standalone'
};
```

**変更後:**
```js
const nextConfig = {
  output: 'export'
};
```

`standalone` はNode.jsサーバー用、`export` は静的ファイル（HTML/CSS/JS）を生成するモード。

---

### STEP 2: 静的ビルド実行

```bash
cd /Users/miyawakidai/dev/CL/cl_一関市/yasupachihp
npm run build
```

**結果**: `out/` ディレクトリに以下が生成された。

```
out/
├── _next/               # JS・CSSチャンク
│   └── static/
│       ├── chunks/
│       └── css/
├── assets/              # 画像ファイル
│   ├── generated/
│   ├── illustrations/
│   └── photos/
├── 404.html
├── index.html           # トップページ（62KB）
└── index.txt
```

---

### STEP 3: zipファイル作成（2回目が正しい）

#### 1回目（失敗）

```bash
cd /Users/miyawakidai/dev/CL/cl_一関市/yasupachihp
zip -r out.zip out/
```

この方法だと zip内のパスが `out/index.html`、`out/_next/` になる。
サーバーで展開すると `public_html/out/index.html` になってしまい、ドメイン直下でアクセスできない。

#### 2回目（正しい）

```bash
rm out.zip
cd /Users/miyawakidai/dev/CL/cl_一関市/yasupachihp/out
zip -r ../out.zip .
```

`out/` の**中に入ってから** zip化することで、zip内のパスが `./index.html`、`./_next/` になる。
→ 展開先のフォルダ直下にファイルが配置される（はず）。

**生成されたファイル**: `out.zip`（約11MB）

---

### STEP 4: XServer WebFTPにアクセス

- URL: `https://webftp-sv17068.xserver.jp/`
- ログイン済みの状態でアクセスし、ファイルマネージャが表示された

---

### STEP 5: public_html の既存ファイル削除

`yasupachiringyo.jp/public_html/` を開くと、WordPressの初期ファイルがインストールされていた。

**確認されたファイル:**
- `wp-admin/`（フォルダ）
- `wp-content/`（フォルダ、最終更新6月21日）
- `wp-includes/`（フォルダ）
- `wp-config.php`
- `index.php`
- `xmlrpc.php` など計23ファイル

**ユーザー確認**: 「契約した初期状態でこれだった、使っていない、全部消してOK」

**操作**: 全ファイル選択 → 削除ボタン → 「完全に削除」

**結果**: `public_html/` が空になった

---

### STEP 6: out.zip のアップロード（位置ミスあり）

WebFTPのアップロードダイアログを開いた時点で、現在地が `yasupachiringyo.jp/`（public_htmlの1つ上）だったため、`out.zip` が `yasupachiringyo.jp/out.zip` にアップロードされた（public_htmlではない）。

---

### STEP 7: 展開（展開先を public_html に変更）

`out.zip` を選択 → 「展開」ボタン → 展開ダイアログで「展開先を変更」→ `public_html` を選択 → 「展開」

**問題発生**: XServerのファイルマネージャは、zipファイル名（`out`）をもとにサブフォルダを自動作成する仕様のため、展開先が `public_html/out/` になってしまった。

```
public_html/
└── out/           ← XServerが自動作成
    ├── _next/
    ├── assets/
    ├── 404.html
    ├── index.html
    └── index.txt
```

この状態だと `yasupachiringyo.jp/out/` でしかアクセスできない。

---

### STEP 8: out フォルダと out.zip を削除して再試行

`public_html/out/` と `yasupachiringyo.jp/out.zip` を選択して削除。

再度 out.zip を作成し直したが（同じ方法）、XServerの展開時の動作は変わらず `out/` サブフォルダが作られる。

---

### STEP 9: out/ の中身を public_html/ に1ファイルずつコピー（作業中）

回避策として、`public_html/out/` の中に入り、各ファイル・フォルダを右クリック → コピー → コピー先を `public_html/` に指定して1つずつコピーする方法を採用。

**コピー済み（完了）:**
- `index.html` → `public_html/`
- `index.txt` → `public_html/`

**コピー未完（ユーザーが手動で対応中）:**
- `_next/`（フォルダ）→ `public_html/`
- `assets/`（フォルダ）→ `public_html/`
- `404.html` → `public_html/`

---

### STEP 10: 後片付け（未完）

コピー完了後に実施すること:
- `public_html/out/` を削除
- `yasupachiringyo.jp/out.zip` を削除

---

## 現在のサーバー状態（作業中）

```
yasupachiringyo.jp/
├── out.zip                 ← 削除予定
├── public_html/
│   ├── out/                ← 削除予定
│   │   ├── _next/
│   │   ├── assets/
│   │   ├── 404.html
│   │   ├── index.html（コピー済み）
│   │   └── index.txt（コピー済み）
│   ├── index.html          ← コピー済み
│   └── index.txt           ← コピー済み
└── ...
```

---

## 作業完了後の想定状態

```
yasupachiringyo.jp/
└── public_html/
    ├── _next/
    ├── assets/
    ├── 404.html
    ├── index.html
    └── index.txt
```

この状態で `https://yasupachiringyo.jp/` にアクセスするとサイトが表示される。

---

## トラブルまとめ

| 問題 | 原因 | 対処 |
|------|------|------|
| zipに `out/` フォルダが含まれる | `zip -r out.zip out/` でzip化した | `cd out && zip -r ../out.zip .` で再作成 |
| 展開先に `out/` サブフォルダが自動作成される | XServerのファイルマネージャの仕様（zip名でフォルダを作る） | 展開後に手動でファイルをコピー |
| アップロード先が public_html でなく上位ディレクトリになった | アップロード時に現在地が yasupachiringyo.jp/ だった | 展開時に展開先を public_html に変更することで対処 |

---

## 次回デプロイ時の効率的な手順（改善版）

1. `next.config.mjs` の `output: 'export'` を確認
2. `npm run build` でビルド
3. `cd out && zip -r ../out.zip .` でzip作成
4. WebFTPで `public_html/` に移動してからアップロード（現在地を確認！）
5. 展開後に `out/` フォルダが作られた場合は、中身を `public_html/` に移動して `out/` 削除
6. FTPクライアント（Cyberduck等）を使えば1ファイルずつのコピー不要でより効率的
