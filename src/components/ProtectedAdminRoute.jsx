import React from "react";
import { Redirect, Route } from "react-router-dom";
import { withUser } from "../components/Auth/withUser";

const ProtectedAdminRoute = ({ component: Component, context, ...rest }) => {
    console.log(context)
  if (context.isLoading) {
    return null;
  } else if (context.isLoggedIn && context.user.role === "admin") {
    return <Route {...rest} render={(props) => <Component {...props} />} />;
  } else {
      console.log("not authorized")
    return <Redirect to="/" />;
  }
};

export default withUser(ProtectedAdminRoute);