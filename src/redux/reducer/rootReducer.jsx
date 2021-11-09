import { combineReducers } from "redux";
import collegeReducer from "./collegeReducer";
import studentReducer from "./studentReducer";

const rootReducer = combineReducers({
  college: collegeReducer,
  student: studentReducer,
});

export default rootReducer;
