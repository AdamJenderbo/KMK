import authenticationReducer from "./authenticationReducer"
import userReducer from "./userReducer"
import { combineReducers } from "redux";

export default combineReducers({
    authentication: authenticationReducer,
    user: userReducer
})