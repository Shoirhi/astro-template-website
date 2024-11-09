AstroでWebサイトを開発するためのテンプレート。

## サンプルサイト
[https://astro-template-website.pages.dev/](https://astro-template-website.pages.dev/)

## 概要

### 前提ライブラリ
- Webフレームワーク：[Astro](https://astro.build/)
- CSSフレームワーク：[Tailwind CSS](https://tailwindcss.com/)
- コンポーネントライブラリ：[shadcn/ui](https://ui.shadcn.com/)

### 共通機能
- [jonasmerlin/astro-seo](https://github.com/jonasmerlin/astro-seo)によるSEO
- robots.txt
- [@astrojs/sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/)によるサイトマップ生成
- ビュートランジション
- ビューポートが375px未満での表示倍率の縮小（Adjust Viewport）
- スムーススクロール
- [Fluid for Tailwind CSS](https://fluid.tw/)による滑らかなレスポンシブ
- [Cloudflare Pages](https://www.cloudflare.com/ja-jp/developer-platform/products/pages/)へのデプロイ対応
- フォントファミリーは、Noto Sans JP、Noto Sasn Monoをローカルのフォントファイルから読み込み
- 404、500のカスタムエラーページ

### 共通コンポーネント
- ヘッダーコンポーネント（Header）
  - ナビゲーションメニュー
  - 現在のページ判定
  - モバイルメニュー
  - 2階層までの入れ子
- フッターコンポーネント（Footer）
- リンクコンポーネント（Link）
- コンテナコンポーネント（Container）

### お問い合わせページ
- F&Qセクション
- お問い合わせフォームセクション
  - [react-hook-form](https://www.react-hook-form.com/)の使用
  - [zod](https://zod.dev/)による入力判定
  - [Resend](https://resend.com/)によるメール送信
  - [react email](https://react.email/)によるHTMLメール文の作成
  - [@marsidev/react-turnstile](https://github.com/marsidev/react-turnstile)による[Cloudflare Turnstile](https://www.cloudflare.com/ja-jp/application-services/products/turnstile/)の実装

### 記事ページ
- [microcms-js-sdk](https://github.com/microcmsio/microcms-js-sdk)を用いた[microCMS](https://microcms.io/)との連携
- 記事一覧ページ
- ページネーション
- カテゴリー昨日
- 記事のメタディスクリプション
- 記事のサムネイル画像
- microCMSから取得した画像をwebpに変換