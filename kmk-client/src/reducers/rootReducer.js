import { combineReducers } from "redux";
import authenticationReducer from "./authenticationReducer";
import eventReducer from "./eventReducer";
import userReducer from "./userReducer";

export default combineReducers({
    authentication: authenticationReducer, 
    event: eventReducer, 
    user: userReducer
})