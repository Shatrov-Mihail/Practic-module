import { deleteComment, getPost } from "../api";
import { ROLE } from "../constants";
import { getPostCommentsWithAuthor } from "../utils";
import { sessions } from "../sessions";

export const removePostComment = async (hash, postId, id) => {
  const accessRoles = [ROLE.ADMIN, ROLE.MODERATOR];

  const access = await sessions.access(hash, accessRoles);

  if (!access) {
    return {
      error: "Доступ запрещён",
      res: null,
    };
  }

  await deleteComment(id);

  const post = await getPost(postId);
  const commentsWithAuthor = getPostCommentsWithAuthor(postId);

  return {
    error: null,
    res: { ...post, comments:commentsWithAuthor },
  };
};
