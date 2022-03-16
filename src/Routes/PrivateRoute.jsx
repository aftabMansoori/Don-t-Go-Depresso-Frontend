import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoutes = (props) => {
  const { component: Component, ...rest } = props;

  const token = JSON.parse(localStorage.getItem("token"));
  // const user = JSON.parse(localStorage.getItem("user"));

  return token ? (
    <Route {...rest} render={(props) => <Component {...props} />} />
  ) : (
    <Redirect to="/" />
  );
};

export default PrivateRoutes;
