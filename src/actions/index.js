import { TOGGLE_LIKE, TOGGLE_COMMENTS } from "../constants";

export const toggleLike = id => ({
  type: TOGGLE_LIKE,
  id
});

export const toggleComments = id => ({
  type: TOGGLE_COMMENTS,
  id
});
