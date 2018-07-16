import React from "react";
import SignInForm from "../auth/SignInForm";
import SignUpForm from "../auth/SignUpForm";
import { Route, NavLink } from "react-router-dom";

class AuthPage extends React.Component {
  handleSubmitIn = value => {
    console.log("----", value);
  };
  handleSubmitUp = value => {
    console.log(value);
  };
  render() {
    return (
      <div>
        <h3>Auth Page</h3>
        <NavLink to="/auth/signin" activeStyle={{ color: "red" }}>
          Sign in
        </NavLink>
        <NavLink to="/auth/signup" activeStyle={{ color: "red" }}>
          Sign up
        </NavLink>
        <Route
          path="/auth/signin"
          render={() => <SignInForm onSubmit={this.handleSubmitIn} />}
        />
        <Route
          path="/auth/signup"
          render={() => <SignUpForm onSubmit={this.handleSubmitUp} />}
        />
      </div>
    );
  }
}

export default AuthPage;
