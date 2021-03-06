import axios from "../../../helpers/axios";
import { API } from "../../../helpers/constants";
import { getUsersLoading, getUsersSuccess, getUsersFailed } from "./reducer";

export const getUsers = () => async (dispatch, getState) => {
  const {
    users: { list },
  } = getState();
  if (list.length) return;
  dispatch(getUsersLoading);
  try {
    const response = await axios.get(API.getUsers());
    dispatch(getUsersSuccess(response.data));
  } catch {
    dispatch(getUsersFailed);
  }
};
