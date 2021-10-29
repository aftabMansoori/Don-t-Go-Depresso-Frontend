const initState = {
    isAuthenticated: false,

    loginInProgress: false,
    loginError: null,

    signupInProgress: false,
    signupError: null,
    signupSuccess: false,

    logoutInProgress: false,
    logoutError: null
}

const collegeReducer = (state = initState, { type, payload }) => {
    switch (type) {
        case 'AUTH_INFO_SUCCESS':
            return {
                ...state,
                isAuthenticated: payload
            }
        case "LOGIN_REQUEST":
            return { ...state, loginInProgress: true, loginError: null };
        case "LOGIN_SUCCESS":
            return { ...state, loginInProgress: false, isAuthenticated: true };
        case "LOGIN_ERROR":
            return { ...state, loginInProgress: false, loginError: payload };

        case "SIGNUP_REQUEST":
            return { ...state, signupInProgress: true, signupError: null };
        case "SIGNUP_SUCCESS":
            return { ...state, signupInProgress: false, signupSuccess: true };
        case "SIGNUP_ERROR":
            return { ...state, signupInProgress: false, signupError: payload };

        case "LOGOUT_REQUEST":
            return { ...state, logoutInProgress: true, logoutError: null };
        case "LOGOUT_SUCCESS":
            return { ...state, logoutInProgress: false, isAuthenticated: false };
        case "LOGOUT_ERROR":
            return { ...state, logoutInProgress: false, logoutError: payload };
        default:
            return { ...state }
    }
}

export default collegeReducer