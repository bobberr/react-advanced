import React from "react";

const ErrorField = props => {
  const {
    input,
    type,
    meta: { error }
  } = props;
  const errorText = error && <div>{error}</div>;
  return (
    <div>
      <label>{input.name}</label>
      <input {...input} type={type} />
    </div>
  );
};

export default ErrorField;
