import axios from "axios";
import { Actions } from "react-native-router-flux";
import {
    EMPLOYEE_LIST_REQUEST,
    EMPLOYEE_LIST_SUCCESS,
    EMPLOYEE_LIST_FAIL,
} from "../../constants/actionTypes";
export const getEmployeeList = () => async dispatch => {
    dispatch({
        type: EMPLOYEE_LIST_REQUEST
    });
    try {
        const response = await axios.get("http://dummy.restapiexample.com/api/v1/employees");
            dispatch({
                type: EMPLOYEE_LIST_SUCCESS,
                payload: response.data
            });
    } catch (err) {
        dispatch({ type: EMPLOYEE_LIST_FAIL, payload: [] });
    }
};