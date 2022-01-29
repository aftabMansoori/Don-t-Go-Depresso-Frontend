const initState = {
  signUpInProgress: false,
  signUpSuccess: false,
  signUpError: null,

  isAuthenticated: false,
  signinInProgress: false,
  signinError: null,

  logoutInProgress: false,
  logoutError: null,
};

const studentReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case "STUDENT_SIGNUP_REQUEST":
      return { ...state, signUpInProgress: true, signUpError: null };
    case "STUDENT_SIGNUP_SUCCESS":
      return { ...state, signUpSuccess: true, signUpInProgress: false };
    case "STUDENT_SIGNUP_ERROR":
      return { ...state, signUpInProgress: false, signUpError: payload };
    case "STUDENT_SIGNIN_REQUEST":
      return { ...state, signinInProgress: true, signinError: null };
    case "STUDENT_SIGNIN_SUCCESS":
      return { ...state, signinInProgress: false, isAuthenticated: true };
    case "STUDENT_SIGIN_ERROR":
      return { ...state, isAuthenticated: false, signinError: payload };
    case "STUDENT_SIGNOUT_REQUEST":
      return { ...state, logoutInProgress: true };
    case "STUDENT_SIGNOUT_SUCCESS":
      return { ...state, isAuthenticated: false, logoutInProgress: false };
    case "STUDENT_SIGNOUT_ERROR":
      return { ...state, isAuthenticated: false, logoutError: payload };
    default:
      return { ...state };
  }
};

export default studentReducer;
