import React from "react";

const TextInput = ({ label, imgSrc, error, name, ...rest }) => {
  return (
    <div className="text-input">
      <label>{label}</label>
      <div className="input-wrap">
        <input type="text" name={name} {...rest} />
        {imgSrc && <img src={imgSrc} alt="" />}
      </div>
    </div>
  );
};

export default TextInput;
