import { LOG_IN, LOG_OUT } from "../actions/authentication";
import { SET_USERS, SET_USER, EDIT_USER_FORM } from "../actions/user";

const defaultState = {
    users: [],
    user: {},
    register: {
        form: {
            name: "",
            email: "",
            instrument: 1,
            password: "",
            passwordConfirm: ""
        }
    }
}

const reducer =  (state = defaultState, action) => {
    switch(action.type) {
        case SET_USERS:
            return {
                ...state,
                users: action.users
            }
        case LOG_IN:
        case SET_USER:
            return {
                ...state,
                user: action.user
            }
        case EDIT_USER_FORM:
            return {
                ...state,
                register: {
                    ...state.register,
                    form: {
                        ...state.register.form,
                        ...action.change
                    }
                }
            }
        case LOG_OUT:
            return {
                ...state,
                user: {}
            }
        default: 
            return state;
    }
}

export default reducer;