import React from "react";
import { Route, Redirect, useLocation } from "react-router-dom";

const PrivateRoutes = (props) => {
  const { component: Component, ...rest } = props;
  const location = useLocation();

  const type = location.pathname.split("/")[1];

  const token = JSON.parse(localStorage.getItem("token"));
  // const user = JSON.parse(localStorage.getItem("user"));

  return token ? (
    <Route {...rest} render={(props) => <Component {...props} />} />
  ) : type === "college" ? (
    <Redirect to="/college/signin" />
  ) : type === "counsellor" ? (
    <Redirect to="/counsellor/signin" />
  ) : (
    <Redirect to="/" />
  );
};

export default PrivateRoutes;
