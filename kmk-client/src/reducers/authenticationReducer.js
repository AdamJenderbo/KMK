import { SET_USER } from "../actions/authentication";

const initialState = {
    user: undefined
}

function reducer(state = initialState, action) {
    switch(action.type) {
        case SET_USER:
            return {...state, user: action.payload};
        default: return state;
    }
}

export default reducer;