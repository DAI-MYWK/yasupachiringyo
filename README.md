# 泰八林業 ホームページ

岩手県南の庭木・危険木の伐採、果樹木の手入れ、山林管理、薪用の切り分けを紹介するホームページです。Next.js / React / TypeScript を使用し、XServerなどにそのまま設置できる静的サイトとして出力します。

## 起動・公開用データ

```bash
npm install
npm run dev
npm run build
```

開発時は `http://localhost:3000`。`npm run build` の成果物は `out/` です。`out/` の**中身**を公開ディレクトリに配置します。外部へのアップロードはビルドに含まれません。

## 主なファイル

- `components/TaihachiLanding.tsx` — 掲載内容、サービス、地域、FAQ、問い合わせ先
- `components/SiteInteractions.tsx` — スマートフォンメニュー、施工写真の拡大、スクロール表示
- `components/ForestArtwork.tsx` — 独自の年輪、杉の枝、線画アイコン、シンボル
- `app/globals.css` — 画面サイズに応じたレイアウトと装飾
- `app/layout.tsx` — ページタイトル・説明・SNS共有情報
- `public/assets/redesign/` — 新しいイメージ写真（ページには軽量WebP、共有画像にはJPEGを使用）
- `public/assets/photos/before-work.jpg` / `after-work.jpg` — 既存の施工前後の実写真

## 操作

- メニューと各サービスから、ページ内の該当箇所へ移動します。
- FAQはクリック／キーボード操作で開閉できます。
- 施工写真はクリックして拡大でき、左右キーまたは施工前・施工後ボタンで切り替え、Escapeで閉じられます。
- 電話・メール・LINE・Instagramは既存の連絡先へ接続します。フォームの疑似送信はありません。
- LINE URLは既存の `qr-line.jpg` から復号した実際のリンクです。
- 動きを減らすOS設定ではスクロール演出を停止します。スクロール表示が動かなくても本文は読めます。

## 写真・掲載内容の扱い

ヒーローとサービス紹介の風景は、承認済みのデザイン案に基づく新規生成のイメージ画像です。実在する顧客宅や施工実績を表すものではありません。施工事例には既存の道路沿いの草木・低木整理の実写真を使っています。

画像生成のプロンプトと記録は `docs/hero-image-prompt.md` および `docs/asset-prompts-supporting.md`。補助画像のPNG原版は公開対象外の `docs/design-assets/originals/` に保存しています。

電話番号、所在地、代表者、受付時間、対応地域は既存コードの内容を引き継いでいます。元READMEで仮情報の可能性が記載されていたため、公開前に事業者の確認が必要です。裏付けのないお客様の声と未設定のプライバシーポリシーリンクは掲載していません。新しい証言や実績の数字は追加していません。

## 2つの事業ページ（2026-09-26追加）

| 事業 | パス | ページ本体 |
| --- | --- | --- |
| 林業・庭木の伐採 | `/` | `components/TaihachiLanding.tsx` |
| 空き家・空き地管理 | `/akiya/` | `components/VacantPropertyLanding.tsx` |

ヘッダーの事業切り替え・写真付きの別事業案内・フッターから相互に移動できます。
共通フッターは `components/SiteFooter.tsx`、共通の別事業案内は `components/BusinessLink.tsx`。
空き家管理の専用スタイルは `app/akiya/akiya.css`、独自の線画は `components/HomeArtwork.tsx`。
新規画像の生成プロンプト・原本・配信ファイルは `docs/asset-prompts-akiya.md` に記録しています。

### 公開用ファイル

`npm run build` で `out/` に2ページを同時に生成します。
`out/` **内のファイルとフォルダ一式**を既存ドメインの公開ディレクトリへ配置してください。
`out/index.html` が林業、`out/akiya/index.html` が空き家管理です。
`_next/`、`assets/`、`akiya/` 等も含めて配置します。
以前からある `out.zip` は今回の成果物ではありません。

サイトURLは `https://yasupachiringyo.jp/` を前提にしています。
変更時は `app/layout.tsx`・`app/sitemap.ts`・`app/robots.ts` のドメインも変更してください。
ページ別のタイトル・説明・OG画像・canonicalと、2ページのサイトマップを設定済みです。
今回の作業はローカル実装・静的出力までで、本番へのアップロードは行っていません。

### 料金の確認事項

- 空き家まるごと管理プランの月額は未提示のため、現時点では「個別にお見積り」。
- オプション価格は依頼文の金額をそのまま反映。税込・税別の扱いは未確認です。公開前に確定してください。
