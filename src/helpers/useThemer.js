import { useSelector } from "react-redux";

export const useThemer = () => {
  const theme = useSelector((state) => state.theme);

  debugger

  return [theme];
};




