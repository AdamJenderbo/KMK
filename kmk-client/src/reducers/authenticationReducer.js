import { LOGGED_IN, LOADED_USER, LOGGGED_OUT } from "../actions/authentication";

const initialState = {
    token: undefined,
    user: undefined
}

function reducer(state = initialState, action) {
    switch(action.type) {
        case LOGGED_IN:
            return {
                ...state, 
                token: action.payload.token,
                user: {
                    id: action.payload.userId,
                    name: action.payload.userName,
                    pictureUrl: action.payload.userPictureUrl
                }
            };
        case LOADED_USER:
            return {
                ...state, 
                token: action.payload.token,
                user: {
                    id: action.payload.userId,
                    name: action.payload.userName,
                    pictureUrl: action.payload.userPictureUrl
                }
            };
        case LOGGGED_OUT:
            return {
                ...state, 
                token: undefined,
                user: undefined
            };

        default: return state;
    }
}

export default reducer;