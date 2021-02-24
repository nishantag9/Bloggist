import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";

import { reducer as UsersReducer } from "../modules/home/redux/reducer";

const store = configureStore({
  reducer: { users: UsersReducer },
  middleware: [thunk],
});

export default store;
