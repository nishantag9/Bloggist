import React from "react";
import Loader from "react-loader-spinner";
import cx from 'classnames'

function index({is_full_page, xs=false}) {
  return (
    <div className={cx({"loader__fixed" : is_full_page})}>
      <Loader
        type="TailSpin"
        color="#00BFFF"
        height={xs? 20: 50}
        width={xs? 20 : 50}
      />
    </div>
  );
}

export default index;
