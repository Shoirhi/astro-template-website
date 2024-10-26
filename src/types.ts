/* SITE */
export type Url = `http://${string}` | `https://${string}`;
export type Path = `/${string}`;
export type OGType = "website" | "article" | "book" | "profile";
export type OGImageMIMEType = "image/jpeg" | "image/png";
export type XTwitterUsername = `@${string}`;

export interface Site {
  /**
   * The final deployed URL, starting with `http://` or `https://`.
   * Used for generating canonical URLs and other features in Astro.
   */
  website: Url;

  /**
   * Base path for the site, starting with `/`.
   * Example: `/my-site/` for `https://example.com/my-site/`.
   */
  base: Path;

  /**
   * Site name
   */
  siteName: string;

  /**
   * Default title use in top page
   */
  titleDefault: string;

  /**
   * Default OG Type
   */
  ogTypeDefault: OGType;

  /**
   * Default OG Image
   */
  ogImageDefault: Path;

  /**
   * Default OG Image MIME Type
   */
  ogImageTypeDefault: OGImageMIMEType;

  /**
   * Default OG Image Alt
   */
  ogImageAltDefault: string;

  /**
   * Default content for meta tags
   */
  descriptionDefault: string;

  /**
   * Primary document language, in BCP 47 format.
   * Example: 'fr' (French), 'zh-Hant' (Traditional Chinese).
   */
  lang: string;

  /**
   * Language and region for social platform display.
   * Format: `language_TERRITORY`, e.g., 'fr_FR'.
   */
  ogLocale: string;

  /**
   * Twitter Username
   */
  xTwitterUsername: XTwitterUsername;
}

interface BaseNavigationItem {
  title: string;
  path: Path;
}

interface NavigationItem extends BaseNavigationItem {
  child?: Array<BaseNavigationItem>
}

export type Navigation = Array<NavigationItem>