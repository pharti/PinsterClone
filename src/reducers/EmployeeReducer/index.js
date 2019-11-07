import {
    EMPLOYEE_LIST_REQUEST,
    EMPLOYEE_LIST_SUCCESS,
    EMPLOYEE_LIST_FAIL,
  } from "../../constants/actionTypes";
  const INITIAL_STATE = {
    employeeList: [],
  };
  export default function(state = INITIAL_STATE, action) {
    const { type, payload } = action;
    switch (type) {
      case EMPLOYEE_LIST_REQUEST:
        return {
          ...state,
          loader: true
        };
      case EMPLOYEE_LIST_SUCCESS:
        return {
          ...state,
          employeeList: payload,
          loader: false
        };
      case EMPLOYEE_LIST_FAIL:
        return {
          ...state,
          loader: false
        };
      default:
        return state;
    }
  }
  