import authenticationReducer from "./authenticationReducer"
import { combineReducers } from "redux";

export default combineReducers({
    authentication: authenticationReducer
})