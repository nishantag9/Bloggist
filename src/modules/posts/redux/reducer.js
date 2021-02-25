import { createSlice } from "@reduxjs/toolkit";
import {DELETED} from "../../../helpers/constants"

const initialState = {
  loading: true,
  success: null,
  error: null,
  detailsLoading: true,
  detailsSuccess: null,
  detailsError: null,
  postsByUserId: {},
  postDetails: null,
  deleting: null,
};

const posts = createSlice({
  name: "posts",
  initialState,
  reducers: {
    getPostsLoading(state) {
      state.loading = true;
      state.success = null;
      state.error = null;
    },
    getPostsSuccess: {
      reducer: (state, action) => {
        state.postsByUserId[action.payload.userId] = action.payload.posts;
        state.loading = false;
        state.success = true;
        state.error = false;
      },
      prepare: (posts, userId) => ({ payload: { posts, userId } }),
    },
    getPostsFailed(state) {
      state.loading = false;
      state.success = false;
      state.error = true;
    },
    getDetailsLoading(state) {
      state.detailsLoading = true;
      state.detailsSuccess = null;
      state.detailsError = null;
    },
    getDetailsSuccess(state, action) {
      state.postDetails = action.payload;
      state.detailsLoading = false;
      state.detailsSuccess = true;
      state.detailsError = false;
    },
    getDetailsFailed(state) {
      state.detailsLoading = false;
      state.detailsSuccess = false;
      state.detailsError = true;
    },
    deleteRequested(state) {
      state.deleting = true;
    },
    deleteSucceeded(state, actions) {
      const {
        payload: { userId, postId },
      } = actions;
      state.deleting = DELETED;
      state.postsByUserId[userId] = (state.postsByUserId[userId] || []).filter(
        (post) => post.id !== Number(postId)
      );
      state.postDetails = null;
    },
    deleteFailed(state) {
      state.deleting = false;
    },
    resetPostDetails(state) {
      state.detailsByPostId = null;
      state.deleting = null;
      state.detailsLoading = true;
      state.detailsSuccess = null;
      state.detailsError = null;
    },
  },
});

export const {
  getPostsLoading,
  getPostsSuccess,
  getPostsFailed,
  getDetailsLoading,
  getDetailsSuccess,
  getDetailsFailed,
  deleteRequested,
  deleteSucceeded,
  deleteFailed,
  resetPostDetails
} = posts.actions;
export const reducer = posts.reducer;
