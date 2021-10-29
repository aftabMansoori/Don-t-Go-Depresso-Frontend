//base URL
const base_url = 'http://localhost:5000'

//College
export const collegeSignUp = (college) => `${base_url}/college/signup`
export const collegeSignIn = (collegeCode, password) => `${base_url}/college/signin`
export const collegeSignOut = () => `${base_url}/college/signout`
export const collegeAddEmails = () => `${base_url}/college/add-emails`
export const collegeGetEmails = () => `${base_url}/college/get-emails`

//Student
export const studentSignUp = () => `${base_url}/student/signup`
export const studentSignIn = () => `${base_url}/student/signin`
export const studentSignOut = () => `${base_url}/student/signout`
export const studentProfile = () => `${base_url}/student/profile`

