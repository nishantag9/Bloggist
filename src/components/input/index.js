import React from "react";

export default function Input({ label, ...rest }) {
  return (
    <div className="g-input">
      {label && <p className="g-input__label">{label}</p>}
      <input className="g-input__input" {...rest} />
    </div>
  );
}
