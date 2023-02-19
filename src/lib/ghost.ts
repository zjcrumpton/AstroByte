import GhostContentAPI from "@tryghost/content-api";
import * as ghostVars from "./ghost.constants";

const api = new GhostContentAPI({
  url: ghostVars.URL,
  key: ghostVars.KEY,
  version: ghostVars.VERSION,
});

export const getAllPosts = async () => {
  const posts = await api.posts.browse({ limit: "all" });
  return posts;
};

export const getPostBySlug = async (slug: string) => {
  const post = await api.posts.read(
    { slug },
    { formats: ["html"], include: "tags" }
  );

  return post;
};

export const getAllTags = async () => {
  const tags = await api.tags.browse({ limit: "all" });
  return tags;
};

export const getAllPostsByTagSlug = async (slug: string) => {
  const posts = await api.posts.browse({
    limit: "all",
    filter: `tag:${slug}`,
  });

  return posts;
};

export const getTagBySlug = async (slug: string) => {
  const tag = await api.tags.read({ slug }, { include: "count.posts" });

  return tag;
};
