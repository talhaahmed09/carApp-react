import React from "react";

const Checkbox = ({ id, type, name, handleClick, isChecked }) => {
  return (
    <input
      className="form-check-input"
      id={id}
      name={name}
      type={type}
      onChange={handleClick}
      checked={isChecked}
    />
  );
};

export default Checkbox;
