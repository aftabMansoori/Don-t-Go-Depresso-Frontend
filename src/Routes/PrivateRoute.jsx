import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

export default function PrivateRoutes(props) {
  const isCollegeAuth = useSelector((state) => state.college.isAuthenticated);
  const isStudentAuth = useSelector((state) => state.student.isAuthenticated);

  if (isCollegeAuth) localStorage.setItem("college", "abhfdvba1aa588a13");
  if (isStudentAuth) localStorage.setItem("student", "augda768afafabffak");

  const { component: Component, ...rest } = props;

  const college = localStorage.getItem("college");
  const student = localStorage.getItem("student");

  if (college) {
    return <Route {...rest} render={(props) => <Component {...props} />} />;
  } else if (student) {
    return <Route {...rest} render={(props) => <Component {...props} />} />;
  } else {
    return <Redirect to="/" />;
  }
}
