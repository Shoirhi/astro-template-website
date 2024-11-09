import type { MicroCMSQueries } from "microcms-js-sdk";

import { client } from "./client";
import type { Post, PostCategory } from "../types";
import { POSTS_CONFIG } from "../config";

export const getAllPosts = async (queries?: MicroCMSQueries) => {
  return await client.getAllContents<Post>({
    endpoint: POSTS_CONFIG.postsCMSEndpoint,
    queries,
  });
};

export const getPosts = async (queries?: MicroCMSQueries) => {
  return await client.getList<Post>({
    endpoint: POSTS_CONFIG.postsCMSEndpoint,
    queries,
  });
};

export const getAllPostIds = async () => {
  return await client.getAllContentIds({
    endpoint: POSTS_CONFIG.postsCMSEndpoint,
  });
};

export const getPostDetail = async (
  contentId: string,
  queries?: MicroCMSQueries
) => {
  return await client.getListDetail<Post>({
    endpoint: POSTS_CONFIG.postsCMSEndpoint,
    contentId,
    queries,
  });
};

export const getAllPostCategories = async (queries?: MicroCMSQueries) => {
  return await client.getAllContents<PostCategory>({
    endpoint: POSTS_CONFIG.postCategoriesCMSEndpoint,
    queries,
  });
};

export const getAllPostCategoryIds = async () => {
  return await client.getAllContentIds({
    endpoint: POSTS_CONFIG.postCategoriesCMSEndpoint,
  });
};

export const getPostCategoryDetail = async (
  contentId: string,
  queries?: MicroCMSQueries
) => {
  return await client.getListDetail<PostCategory>({
    endpoint: POSTS_CONFIG.postCategoriesCMSEndpoint,
    contentId,
    queries,
  });
};
