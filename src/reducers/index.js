import { posts } from "../data/";
import { TOGGLE_LIKE, TOGGLE_COMMENTS } from "../constants";

export const initialState = {
  ...posts
};

// toggleLike

// toggleCommentView

const reducer = (state = initialState, action = {}) => {
  // console.log
  switch (action.type) {
    case TOGGLE_LIKE: {
      const { id } = action;
      return Object.assign({}, state, {
        [id]: {
          ...state[id],
          likes: !state[id].liked ? state[id].likes++ : state[id].likes--,
          liked: !state[id].liked
        }
      });
    }
    case TOGGLE_COMMENTS: {
      const { id } = action;
      return Object.assign({}, state, {
        [id]: {
          ...state[id],
          showComments: !state[id].showComments
        }
      });
    }
    default: {
      return state;
    }
  }
};

export default reducer;
