import { apiPost } from "./net";

const endpoint = "authentication";

export const LOG_IN = "LOG_IN";
export const LOG_OUT = "LOG_OUT";

export function logIn(email, password) {
    return async (dispatch) => {
        try {
            
            const {payload} = await apiPost(`${endpoint}/logIn`, {email, password});

            if(payload) {
                dispatch({ type: LOG_IN, user: payload});
            }
        }
        catch(e) {
            console.log(e);
        }
    }
}

export function logOut() {
    return async (dispatch) => {
        try {
            dispatch({ type: LOG_OUT })
        }
        catch(e) {
            console.log(e);
        }
    }
}