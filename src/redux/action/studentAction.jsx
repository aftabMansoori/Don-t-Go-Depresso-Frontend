import {
  studentSignIn,
  studentSignUp,
  studentProfile,
  studentSignOut,
} from "../../api";
import axios from "axios";

export const studentRegister = (student) => async (dispatch) => {
  dispatch({ type: "STUDENT_SIGNUP_REQUEST" });
  let response = await axios.post(studentSignUp(), { student });
  if (response.status === 201) {
    dispatch({ type: "STUDENT_SIGNUP_SUCCESS" });
  } else {
    dispatch({ type: "STUDENT_SIGNUP_ERROR", payload: "There was an error" });
  }
};

export const studentLogin = (studentClgEmail, password) => async (dispatch) => {
  dispatch({ type: "STUDENT_SIGNIN_REQUEST" });
  let response = await axios.post(studentSignIn(), {
    studentClgEmail,
    password,
  });
  if (response.status === 200) {
    dispatch({ type: "STUDENT_SIGNIN_SUCCESS" });
  } else {
    dispatch({ type: "STUDENT_SIGNIN_ERROR", payload: "Signin Error" });
  }
  return response.status;
};
