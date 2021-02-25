import { createSlice } from "@reduxjs/toolkit";
import { getStorageItem, setStorageItem } from "../../../helpers/helpers";
import { THEME_KEY, DEFAULT_THEME } from "../../../helpers/constants";

const getInitialThemeState = () => {
  var savedTheme = getStorageItem(THEME_KEY);
  if (!savedTheme) {
    savedTheme = DEFAULT_THEME;
    setStorageItem(THEME_KEY, DEFAULT_THEME);
  }
  return savedTheme;
};

const theme = createSlice({
  name: "Theme",
  initialState: getInitialThemeState(),
  reducers: {
    setThemeAction: (state, action) => action.payload,
  },
});

export const { setThemeAction } = theme.actions;
export const reducer = theme.reducer;
