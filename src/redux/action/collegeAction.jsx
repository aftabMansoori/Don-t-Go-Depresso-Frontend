import { collegeSignUp, collegeSignIn, collegeSignOut } from "../../api";
import axios from "axios";

export const collegeRegister = (college) => async (dispatch) => {
  dispatch({ type: "COLLEGE_SIGNUP_REQUEST" });
  let response = await axios.post(collegeSignUp(), { college });
  if (response.status === 201) {
    dispatch({ type: "COLLEGE_SIGNUP_SUCCESS" });
  } else {
    dispatch({ type: "COLLEGE_SIGNUP_ERROR", payload: "There was an error" });
  }
};

export const collegeLogin = (collegeCode, password) => async (dispatch) => {
  dispatch({ type: "COLLEGE_SIGNIN_REQUEST" });
  let response = await axios.post(collegeSignIn(), { collegeCode, password });
  if (response.status === 200) dispatch({ type: "COLLEGE_SIGNIN_SUCCESS" });
  else dispatch({ type: "COLLEGE_SIGNIN_ERROR", payload: "Signin Error" });
};

export const collegeLogout = () => async (dispatch) => {
  dispatch({ type: "COLLEGE_SIGNOUT_REQUEST" });
  let response = await axios.get(collegeSignOut());
  if (response.status === 200) {
    dispatch({ type: "COLLEGE_SIGNOUT_SUCCESS" });
    localStorage.removeItem("college");
  } else dispatch({ type: "COLLEGE_SIGNOUT_ERROR" });
};
