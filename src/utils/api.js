//base URL
// export const base_url = "https://dontgodepresso.herokuapp.com";  "http://localhost:5000" ||
export const base_url = "https://dontgodepresso.herokuapp.com";
// export const base_url = "http://localhost:5000";

//College
export const collegeSignUp = (college) => `/college/signup`;
export const collegeSignIn = (collegeCode, password) => `/college/signin`;
export const collegeSignOut = () => `/college/signout`;
export const collegeAddEmails = () => `/college/add-emails`;
export const collegeGetEmails = () => `/college/get-emails`;
export const addCollegeCounsellor = "/college/addcounsellor";
export const getClgCounsellor = "/college/get-counsellors";

//Student
export const studentSignUp = () => `/student/signup`;
export const studentSignIn = () => `/student/signin`;
export const studentSignOut = `/student/signout`;
export const studentProfile = () => `/student/profile`;
export const saveQuestionaire = "/student/save-questionaire";
export const getResponse = "/student/response";
export const getAppointments = "/student/getallappointments";
export const getStdtcounsellors = "/student/get-counsellors";
export const scheduleAppointment = "/student/scheduleappointment";

//Counsellor
export const counsellorSignin = "/counsellor/signin";
