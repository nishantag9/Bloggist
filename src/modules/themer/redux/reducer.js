import {createSlice} from "@reduxjs/toolkit"
import {getStorageItem, setStorageItem} from "../../../helpers/helpers";
import {THEME_KEY, DEFAULT_THEME} from "../../../helpers/constants"

const getInitialThemeState = () => {
  var savedTheme = getStorageItem(THEME_KEY);
  if (!savedTheme) {
    savedTheme = DEFAULT_THEME;
    setStorageItem(THEME_KEY, DEFAULT_THEME);
  }
  return savedTheme;
};


const themeSlice = createSlice({
  name: "Theme",
  initialState: getInitialThemeState(),
  reducers: {
    setThemeAction(state, action) {
      state = action.payload;
    },
  },
});

export const { setThemeAction } = themeSlice.actions;
export const reducer = themeSlice.reducer;

