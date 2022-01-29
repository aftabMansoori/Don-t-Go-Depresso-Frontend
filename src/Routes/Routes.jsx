import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Components
//College
import CollegeSignup from "../Pages/College/CollegeSignup";
import CollegeSignin from "../Pages/College/CollegeSignin";
import CollegeDashboard from "../Pages/College/CollegeDashboard";
//Student
import StudentSignUp from "../Pages/Students/StudentSignUp";
import StudentSignin from "../Pages/Students/StudentSignin";
import StudentProfile from "../Pages/Students/StudentProfile";
//VideoCall
import VideoCall from "../Pages/VideoCall/VideoCall";
export default function Routes() {
  return (
    <>
      <Router>
        <Switch>
          {/* Student */}
          <Route exact path="/student/signup" component={StudentSignUp} />
          <Route exact path="/student/signin" component={StudentSignin} />
          <Route exact path="/student/set-profile" component={StudentProfile} />

          {/* College Routes */}
          <Route exact path="/college/signup" component={CollegeSignup} />
          <Route
            exact
            path={["/college/signin", "/"]}
            component={CollegeSignin}
          />
          <Route exact path="/college/dashboard" component={CollegeDashboard} />
          <Route exact path="/videocall" component={VideoCall} />
        </Switch>
      </Router>
    </>
  );
}
