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
  resetPostDetails
} from "./reducer";

export const getPosts = (userId) => async (dispatch, getState) => {
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
      dispatch(deleteSucceeded({postId, userId}));
    } catch {
      dispatch(deleteFailed());
    }
  };

  export const resetDetails = () => async (dispatch, getState) => {
      dispatch(resetPostDetails())
  }


  
