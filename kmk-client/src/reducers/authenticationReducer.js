import { SET_ACCESS_TOKEN, SET_USER } from "../actions/authentication";

const initialState = {
    accessToken: undefined,
    user: undefined
}

function reducer(state = initialState, action) {
    switch(action.type) {
        case SET_ACCESS_TOKEN:
            return{...state, accessToken: action.payload};
        case SET_USER:
            return {...state, user: action.payload};
        default: return state;
    }
}

export default reducer;