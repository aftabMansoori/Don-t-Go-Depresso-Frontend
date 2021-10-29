import { collegeSignUp, collegeSignIn, collegeSignOut } from '../../api'
import axios from 'axios'

export const collegeRegister = (college) => async (dispatch) => {
    dispatch({ type: 'SIGNUP_REQUEST' })
    return await axios.post(collegeSignUp(), { college })
        .then(() => {
            dispatch({ type: 'SIGNUP_SUCCESS' })
        })
        .catch((e) => {
            console.log(e)
            dispatch({ type: 'SIGNUP_ERROR', payload: e })
        })
}

// export const collegeSignIn = (collegeCode, password) => async (dispatch) => {
//     const signedIn = await axios.post(CollegeSignIn(), { collegeCode, password })

// }