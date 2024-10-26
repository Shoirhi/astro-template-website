import type { Site, Navigation } from "./types";
export const IS_PRODUCTION = process.env.NODE_ENV === "production";

export const SITE: Site = {
  website: IS_PRODUCTION
    ? "https://astro-template-common.pages.dev/" //同じ値をastro.config.mjsのsiteに設定
    : "http://localhost:4321/",
  base: "/",
  siteName: "Astro Template Common",
  titleDefault: "Astro Template Common",
  descriptionDefault: "A template of Astro Common Components.",
  ogTypeDefault: "website",
  ogImageDefault: "/opengraph-image-1200x630.jpg",
  ogImageTypeDefault: "image/jpeg",
  ogImageAltDefault: "This is the site image.",
  lang: "ja",
  ogLocale: "ja_JP",
  xTwitterUsername: "@bolstatech",
};

export const NAVIGATION: Navigation = [
  {
    title: "Smaple Page 1",
    path: "/sample-page-1",
  },
  {
    title: "Group 1",
    path: "/group-1/",
    child: [
      {
        title: "Group 1 Top",
        path: "/group-1/",
      },
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
        title: "Group 2 Top",
        path: "/group-2",
      },
      {
        title: "Sample Page 3",
        path: "/group-2/sample-page-3",
      },
    ],
  },
];
