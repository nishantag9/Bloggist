import axios from "../../../helpers/axios";
import { API } from "../../../helpers/constants";
import { getUsersLoading, getUsersSuccess, getUsersFailed } from "./reducer";

export const getUsers = () => async (dispatch, getState) => {
  dispatch(getUsersLoading);
  try {
    const payload = await axios.get(API.getUsers());
    dispatch(getUsersSuccess(payload.data));
  } catch {
    dispatch(getUsersFailed);
  }
};
