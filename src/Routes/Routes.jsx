import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

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
import ViewResponse from "../Components/Student/Quiz/ViewResponse";
//Counsellor
import CSSignin from "../Pages/Counsellor/CSSignin/CSSignin";
import CSDashboard from "../Pages/Counsellor/CSSchedules/CSDashboard";

import PrivateRoutes from "./PrivateRoute";

//VideoCall
// import VideoCall from "../Pages/VideoCall/VideoCall";
import { GoToRoomInput } from "../Components/VideoCall/GoToRoomInput";
import Video from "../Components/VideoCall/video";

export default function AppRoutes() {
  const isAuth = JSON.parse(localStorage.getItem("token"));

  return (
    <>
      <Navbar isAuth={isAuth} />

      <Routes>
        {/* Student */}
        <Route path="/student/signup" element={<StudentSignUp />} />
        <Route path="/student/signin" element={<StudentSignin />} />
        <Route
          path="/student/set-profile"
          element={<PrivateRoutes element={StudentProfile} />}
        />
        <Route
          path="/student/set-profile/2"
          element={<PrivateRoutes element={StudentProfileP2} />}
        />
        <Route
          path="/student/dashboard"
          element={<PrivateRoutes element={StudentDashboard} />}
        />
        <Route
          path="/student/view-profile"
          element={<PrivateRoutes element={ViewProfile} />}
        />
        <Route
          path="/student/questionaire"
          element={<PrivateRoutes element={Quiz} />}
        />
        <Route
          path="/student/response"
          element={<PrivateRoutes element={Answers} />}
        />
        <Route
          path="/student/response/:id"
          element={<PrivateRoutes element={ViewResponse} />}
        />

        {/* College Routes */}
        <Route path="/college/signup" element={<CollegeSignup />} />
        <Route
          path="/college/signin"
          element={CollegeSignin}
        />
        <Route path="/college" element={<Navigate replace to="/college/signin" />} />
        <Route
          path="/college/dashboard"
          element={<PrivateRoutes element={CollegeDashboard} />}
        />
        <Route
          path="/college/add-emails"
          element={<PrivateRoutes element={AddEmails} />}
        />
        <Route
          path="/college/counsellor"
          element={<PrivateRoutes element={Counsellor} />}
        />

        {/* Counsellor */}
        <Route path="/counsellor/signin" element={<CSSignin />} />
        <Route
          path="/counsellor/dashboard"
          element={<PrivateRoutes element={CSDashboard} />}
        />

        <Route path="/quotes" element={<Quotes />} />
        <Route path="/blog" element={<Blogs />} />
        <Route path="/" element={<Navigate replace to="/blog" />} />
        <Route path="/call" element={<GoToRoomInput />} />
        {/* <Route path="/call/:roomId" element={<Video />} /> */}
      </Routes>
    </>
  );
}
