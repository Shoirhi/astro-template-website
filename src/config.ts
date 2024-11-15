import type { Site, Navigation } from "./types";
export const IS_PRODUCTION = process.env.NODE_ENV === "production";

export const SITE: Site = {
  website: IS_PRODUCTION
    ? "https://astro-template-website.pages.dev" //同じ値をastro.config.mjsのsiteに設定
    : "http://localhost:4321/",
  base: "/",
  siteName: "Astro Template Website",
  titleDefault: "Astro Template Website（Astroで作るWebサイト）",
  descriptionDefault:
    "Astro Template Websiteは、AstroをベースにWebサイトを開発するための、ベーシックなテンプレートです。よく使う便利機能やUIライブラリ、アクセシビリティとユーザビリティのベストプラクティスを用いて、どんなWebサイトにも応用できるテンプレートとなっております。どなたでも自由にご利用可能です。",
  ogTypeDefault: "website",
  ogImageDefault: "/opengraph-image-1200x630.jpg",
  ogImageTypeDefault: "image/jpeg",
  ogImageAltDefault: "Astro Template Website",
  lang: "ja",
  ogLocale: "ja_JP",
  xTwitterUsername: "@",
};

export const NAVIGATION: Navigation = [
  {
    title: "記事",
    path: "/posts",
  },
  {
    title: "お問い合わせ",
    path: "/contact",
  },
  {
    title: "Group 1",
    path: "/group-1/",
    child: [
      {
        title: "Smaple Page 2",
        path: "/group-1/sample-page-2",
      },
    ],
  },
  {
    title: "Group 2",
    path: "/group-2",
    child: [
      {
        title: "Sample Page 3",
        path: "/group-2/sample-page-3",
      },
    ],
  },
];
