import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: true,
  success: null,
  error: null,
  list: [],
};

const users = createSlice({
  name: "users",
  initialState,
  reducers: {
    getUsersLoading(state) {
      state.loading = true;
      state.success = null;
      state.error = null;
    },
    getUsersSuccess(state, action) {
      state.list = action.payload;
      state.loading = false;
      state.success = true;
      state.error = false;
    },
    getUsersFailed(state) {
      state.loading = false;
      state.success = false;
      state.error = true;
    },
  },
});

export const {
  getUsersLoading,
  getUsersSuccess,
  getUsersFailed,
} = users.actions;
export const reducer = users.reducer;
