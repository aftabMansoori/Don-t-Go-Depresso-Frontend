//base URL
// export const base_url = "https://dontgodepresso.herokuapp.com";  "http://localhost:5000" ||
// export const base_url = "https://dontgodepresso.herokuapp.com";
export const base_url = "http://localhost:5000";

//College
export const collegeSignUp = (college) => `/college/signup`;
export const collegeSignIn = (collegeCode, password) => `/college/signin`;
export const collegeSignOut = () => `/college/signout`;
export const collegeAddEmails = () => `/college/add-emails`;
export const collegeGetEmails = () => `/college/get-emails`;

//Student
export const studentSignUp = () => `/student/signup`;
export const studentSignIn = () => `/student/signin`;
export const studentSignOut = `/student/signout`;
export const studentProfile = () => `/student/profile`;
