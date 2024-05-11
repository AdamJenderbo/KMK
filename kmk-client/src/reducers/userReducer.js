import { SET_USERS } from "../actions/user";

const initialState = {
    users: []
}

function reducer(state = initialState, action) {
    switch(action.type) {
        case SET_USERS:
            return {
                ...state, 
                users: action.payload
            };
        default: 
            return state;
    }
}

export default reducer;