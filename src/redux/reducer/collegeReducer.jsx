const initState = {
  isAuthenticated: false,

  signinInProgress: false,
  signinError: null,

  signupInProgress: false,
  signupError: null,
  signupSuccess: false,

  logoutInProgress: false,
  logoutError: null,
};

const collegeReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case "COLLEGE_SIGNUP_REQUEST":
      return { ...state, signUpInProgress: true, signUpError: null };
    case "COLLEGE_SIGNUP_SUCCESS":
      return { ...state, signUpSuccess: true, signUpInProgress: false };
    case "COLLEGE_SIGNUP_ERROR":
      return { ...state, signUpInProgress: false, signUpError: payload };
    case "COLLEGE_SIGNIN_REQUEST":
      return { ...state, signinInProgress: true, signinError: null };
    case "COLLEGE_SIGNIN_SUCCESS":
      return { ...state, signinInProgress: false, isAuthenticated: true };
    case "COLLEGE_SIGIN_ERROR":
      return { ...state, isAuthenticated: false, signinError: payload };
    case "COLLEGE_SIGNOUT_REQUEST":
      return { ...state, logoutInProgress: true };
    case "COLLEGE_SIGNOUT_SUCCESS":
      return { ...state, isAuthenticated: false, logoutInProgress: false };
    case "COLLEGE_SIGNOUT_ERROR":
      return { ...state, logoutError: payload };
    default:
      return { ...state };
  }
};

export default collegeReducer;
