import React from "react";
import { Route } from "react-router-dom";
import AdminPage from "../Components/routes/AdminPage";
import AuthPage from "../Components/routes/AuthPage";

const Root = props => {
  return (
    <div>
      <Route path="/admin" component={AdminPage} />
      <Route path="/auth" component={AuthPage} />
    </div>
  );
};

export default Root;
