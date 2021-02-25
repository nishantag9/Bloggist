import { useSelector } from "react-redux";
import { DARK } from "./constants";

export const useIsDark = () => {
  const theme = useSelector((state) => state.theme);
  if (theme === DARK) return true;
  return false;
};
