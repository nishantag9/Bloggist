import React from "react";
import Loader from "react-loader-spinner";

function index() {
  return (
    <div>
      <Loader
        type="TailSpin"
        color="#00BFFF"
        height={100}
        width={100}
      />
    </div>
  );
}

export default index;
