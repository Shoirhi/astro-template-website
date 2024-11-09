import type {
  MicroCMSImage,
  MicroCMSDate,
  MicroCMSContentId,
} from "microcms-js-sdk";

export interface PostsConfigProps {
  postsCMSEndpoint: string;
  postsPerPage: number;
  postsForPreview: number;
  postsIndexSlug: string;
  postCategoriesCMSEndpoint: string;
}

export type PostCategory = {
  title: string;
  slug: string;
} & MicroCMSContentId &
  MicroCMSDate;

export type Post = {
  title: string;
  description: string;
  content: string;
  category?: PostCategory;
  thumbnail?: MicroCMSImage;
} & MicroCMSContentId &
  MicroCMSDate;
