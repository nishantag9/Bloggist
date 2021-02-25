import axios from "../../../helpers/axios";
import { API } from "../../../helpers/constants";
import {
  getPostsLoading,
  getPostsSuccess,
  getPostsFailed,
  getDetailsLoading,
  getDetailsSuccess,
  getDetailsFailed,
  deleteRequested,
  deleteSucceeded,
  deleteFailed,
  resetPostDetails,
  commentsLoading,
  commentsSucceeded,
  commentsFailed,
  toggleCommentsAction
} from "./reducer";

export const getPosts = (userId) => async (dispatch, getState) => {
  const {
    posts: { postsByUserId },
  } = getState();
  if (postsByUserId[userId]?.length) return;
  dispatch(getPostsLoading());
  try {
    const response = await axios.get(API.getUserPosts(userId));
    console.log(response.data);
    dispatch(getPostsSuccess(response.data, userId));
  } catch {
    dispatch(getPostsFailed());
  }
};

export const getPostDetails = (postId) => async (dispatch, getState) => {
  dispatch(getDetailsLoading());
  try {
    const response = await axios.get(API.getPostDetails(postId));
    console.log(response.data);
    dispatch(getDetailsSuccess(response.data, postId));
  } catch {
    dispatch(getDetailsFailed());
  }
};

export const deletePost = (postId, userId) => async (dispatch, getState) => {
  dispatch(deleteRequested());
  try {
    const response = await axios.delete(API.delete(postId));
    console.log(response.data);
    dispatch(deleteSucceeded({ postId, userId }));
  } catch {
    dispatch(deleteFailed());
  }
};

export const resetDetails = () => (dispatch, getState) => {
  dispatch(resetPostDetails());
};

export const fetchComments = (postId) => async (dispatch, getState) => {
    dispatch(commentsLoading());
  try {
    const response = await axios.get(API.getComments(postId));
    dispatch(commentsSucceeded(response.data));
  } catch {
    dispatch(commentsFailed());
  }
}

export const toggleComments = (flag, postId) => (dispatch, getState) => {
    const {posts:{comments}} = getState()
    if(comments){
        dispatch(toggleCommentsAction(flag))
    }
    else{
        dispatch(fetchComments(postId))
        dispatch(toggleCommentsAction(flag))
    }
  };


