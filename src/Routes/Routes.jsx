import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
} from "react-router-dom";

//Components
import Home from "../Pages/Home";
import Navbar from "../Components/Global/Navbar";
import Quotes from "../Pages/Quotes/Quotes";
import Blogs from "../Pages/Blogs/Blogs";
//College
import CollegeSignup from "../Pages/College/CollegeSignup/CollegeSignup";
import CollegeSignin from "../Pages/College/CollegeSignin/CollegeSignin";
import CollegeDashboard from "../Pages/College/CollegeDashboard/CollegeDashboard";
import AddEmails from "../Pages/College/AddEmails/AddEmails";
import Counsellor from "../Pages/College/Counsellor/Counsellor";
//Student
import StudentSignUp from "../Pages/Students/StudentSignUp/StudentSignUp";
import StudentSignin from "../Pages/Students/StudentSignIn/StudentSignin";
import StudentProfile from "../Pages/Students/StudentProfile/StudentProfile";
import StudentProfileP2 from "../Pages/Students/StudentProfile/StudentProfileP2";
import StudentDashboard from "../Pages/Students/Dashboard/StudentDashboard";
import ViewProfile from "../Pages/Students/StudentProfile/ViewProfile";
import Quiz from "../Pages/Students/Quiz/Quiz";
import Answers from "../Pages/Students/Quiz/Answers";
//Counsellor
import CSSignin from "../Pages/Counsellor/CSSignin/CSSignin";
import CSDashboard from "../Pages/Counsellor/CSSchedules/CSDashboard";

import PrivateRoutes from "./PrivateRoute";

//VideoCall
import VideoCall from "../Pages/VideoCall/VideoCall";
import { GoToRoomInput } from "../Components/VideoCall/GoToRoomInput";
import Video from "../Components/VideoCall/video";

export default function Routes() {
  const isAuth = JSON.parse(localStorage.getItem("token"));

  return (
    <>
      <Router>
        <Navbar isAuth={isAuth} />

        <Switch>
          {/* Student */}
          <Route exact path="/student/signup" component={StudentSignUp} />
          <Route exact path="/student/signin" component={StudentSignin} />
          <PrivateRoutes
            exact
            path="/student/set-profile"
            component={StudentProfile}
          />
          <PrivateRoutes
            exact
            path="/student/set-profile/2"
            component={StudentProfileP2}
          />
          <PrivateRoutes
            exact
            path="/student/dashboard"
            component={StudentDashboard}
          />
          <PrivateRoutes
            exact
            path="/student/view-profile"
            component={ViewProfile}
          />
          <PrivateRoutes exact path="/student/questionaire">
            <Quiz />
          </PrivateRoutes>
          <PrivateRoutes exact path="/student/answers" component={Answers} />

          {/* College Routes */}
          <Route exact path="/college/signup" component={CollegeSignup} />
          <Route
            exact
            path={["/college/signin", "/college"]}
            component={CollegeSignin}
          />
          <PrivateRoutes
            exact
            path="/college/dashboard"
            component={CollegeDashboard}
          />
          <PrivateRoutes
            exact
            path="/college/add-emails"
            component={AddEmails}
          />
          <PrivateRoutes
            exact
            path="/college/counsellor"
            component={Counsellor}
          />

          {/* Counsellor */}
          <Route exact path="/counsellor/signin" component={CSSignin} />
          <PrivateRoutes
            exact
            path="/counsellor/dashboard"
            component={CSDashboard}
          />

          <Route exact path="/quotes" component={Quotes} />
          <Route exact path={["/blogs", "/"]} component={Blogs} />
          <Route path="/call" exact component={GoToRoomInput} />
          <Route path="/call/:roomId" exact component={Video} />
        </Switch>
      </Router>
    </>
  );
}
