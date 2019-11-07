import { combineReducers } from "redux";
import employeeReducer from "./EmployeeReducer";
const appReducer = combineReducers({
  employeeReducer,
});

export default appReducer;