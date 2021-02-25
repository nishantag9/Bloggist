import { setStorageItem } from "../../../helpers/helpers";
import { THEME_KEY } from "../../../helpers/constants";
import { setThemeAction } from "./reducer";

export const setTheme = (theme) => (dispatch, getState) => {
  setStorageItem(THEME_KEY, theme);
  dispatch(setThemeAction(theme));
};
