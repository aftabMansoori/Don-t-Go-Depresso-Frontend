import { combineReducers } from "redux"
import collegeReducer from './collegeReducer'

const rootReducer = combineReducers({
    college: collegeReducer
})

export default rootReducer