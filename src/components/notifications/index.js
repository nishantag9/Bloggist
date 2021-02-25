import React from "react";

import {ToastContainer} from "react-toastify"

export default function index() {
  return (
    <ToastContainer
      position="bottom-left"
      autoClose={4000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
  );
}
