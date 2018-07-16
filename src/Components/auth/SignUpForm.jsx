import React from "react";
import { reduxForm, Field } from "redux-form";
import emailValidator from "email-validator";
import ErrorField from "./ErrorField";

class SignUpForm extends React.Component {
  render() {
    const { handleSubmit } = this.props;

    return (
      <div>
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Email</label>
            <Field name="email" component={ErrorField} />
          </div>
          <div>
            <label>Password</label>
            <Field name="password" component={ErrorField} type="password" />
          </div>
          <div>
            <input type="submit" />
          </div>
        </form>
      </div>
    );
  }
}

const validate = ({ email, password }) => {
  const errors = {};
  if (!email) errors.email = "Email is required";
  else if (!emailValidator.validate(email)) errors.email = "Invalid email";
  if (!password) errors.password = "Password is required";
  else if (password.langth < 8) errors.password = "The password is to short";
  return errors;
};

export default reduxForm({
  form: "auth"
})(SignUpForm);
