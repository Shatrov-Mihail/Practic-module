import { getComments, getPosts } from "../api";
import { ROLE } from "../constants";
import { sessions } from "../sessions";
import { getCommentsCount } from "../utils";

export const fetchPosts = async (hash) => {
  const accessRoles = [ROLE.ADMIN];
  const access = await sessions.access(hash, accessRoles);

  if (!access) {
    return {
      error: "Доступ запрещён",
      res: null,
    };
  }
  const [posts, comments] = await Promise.all([getPosts(), getComments()]);

  return {
    error: null,
    res: posts.map((post) => ({
      ...post,
      commentsCount: getCommentsCount(comments, post.id),
    })),
  };
};
