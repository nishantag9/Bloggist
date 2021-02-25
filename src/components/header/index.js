import React from "react";
import Switch from "react-switch";
import { useDispatch } from "react-redux";
import { useIsDark } from "../../helpers/useIsDark";
import { DARK, LIGHT } from "../../helpers/constants";
import { setTheme } from "../../modules/themer/redux/actions";
import { Link } from "react-router-dom";

export default function Index() {
  const isDark = useIsDark();
  const dispatch = useDispatch();

  const handleChange = () => {
    if (isDark) return dispatch(setTheme(LIGHT));
    dispatch(setTheme(DARK));
  };

  return (
    <div className="header">
      <a className="header__logo" href="/home">
        BLOGGIST
      </a>
      <span className="header__theme">
        <i className="icon fa fa-sun-o"></i>
        <Switch
          onColor="#FFC300"
          onChange={handleChange}
          checked={isDark}
          checkedIcon={false}
          uncheckedIcon={false}
        />
        <i className="icon fa fa-moon-o"></i>
      </span>
    </div>
  );
}
