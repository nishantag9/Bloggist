import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";

import { reducer as UsersReducer } from "../modules/home/redux/reducer";
import { reducer as PostsReducer } from "../modules/posts/redux/reducer";

const store = configureStore({
  reducer: { users: UsersReducer, posts: PostsReducer },
  middleware: [thunk],
});

export default store;
