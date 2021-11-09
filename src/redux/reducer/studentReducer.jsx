const initState = {
  signUpInProgress: false,
  signUpSuccess: false,
  signUpError: null,

  isAuthenticated: false,
  siginInProgress: false,
  signinError: null,
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
      return { ...state, siginInProgress: true, signinError: null };
    case "STUDENT_SIGNIN_SUCCESS":
      return { ...state, siginInProgress: false, isAuthenticated: true };
    case "STUDENT_SIGIN_ERROR":
      return { ...state, isAuthenticated: false, signinError: payload };
    default:
      return { ...state };
  }
};

export default studentReducer;
