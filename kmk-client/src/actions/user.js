import { apiGet } from "./net"

export const SET_USERS = "SET_USERS";


export function getUsers() {
    return async (dispatch, getState) => {

        const state = getState();

        const users = await apiGet(state.authentication.token, "user");

        console.log(users);

        dispatch({type: SET_USERS, payload: users});
    }
}