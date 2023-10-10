import { apiGet, apiPost } from "./net";

const endpoint = "user";


export const EDIT_USER_FORM = "EDIT_USER_FORM";
export const SET_USER = "SET_USER";
export const SET_USERS = "SET_USERS";

export function getUsers() {
    return async (dispatch) => {
        try {
            const users = await apiGet(endpoint);

            dispatch({ type: SET_USERS, users });
        }
        catch(e) {
            console.log(e);
        }
    }
}


export function getUser(id) {
    return async (dispatch) => {
        try {
            const user = await apiGet(`${endpoint}/${id}`);
            dispatch({ type: SET_USER, user });
        }
        catch(e) {
            console.log(e);
        }
    }
}


export function registerUser() {
    return async (dispatch, getState) => {
        try {

            console.log("fefre")
            const state = getState();
            const form = state.user.register.form;

            if(!validateUserForm(form)) {
                console.logError("User not valid!")
                return;
            }

            const user = await apiPost(`${endpoint}/register`, form);

            dispatch({ type: SET_USER, user });
        }
        catch(e) {
            console.log(e);
        }
    }
}

export function editUserForm(change) {
    return async (dispatch) => {
        try {
            dispatch({ type: EDIT_USER_FORM, change });
        }
        catch(e) {
            console.log(e);
        }
    }
}

export function validateUserForm(form) {
    if(!form.name || form.name.length === 0) {
        return false;
    }
    if(!form.email || form.email.length === 0) {
        return false;
    }
    if(!form.instrument) {
        return false;
    }
    if(!form.password || form.password.length === 0) {
        return false;
    }
    if(form.password !== form.passwordConfirm) {
        return false;
    }
    return true;
}