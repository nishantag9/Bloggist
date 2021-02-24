import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: null,
  list: [],
};

const users = createSlice({
  name: "users",
  initialState,
  reducers: {
    getUsersLoading(state) {
      state.loading = true;
    },
    getUsersSuccess(state, action) {
      state.list = action.payload;
      state.loading = false;
    },
    getUsersFailed(state) {
      state.loading = false;
    },
  },
});

const { getUsersLoading, getUsersSuccess, getUsersFailed } = users.actions;

export { getUsersLoading, getUsersSuccess, getUsersFailed };
export const reducer = users.reducer;
