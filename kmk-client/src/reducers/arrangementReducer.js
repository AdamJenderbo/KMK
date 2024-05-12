import { SET_ARRANGEMENTS } from "../actions/arrangement";

const initialState = {
    arrangements: []
}

function reducer(state = initialState, action) {
    switch(action.type) {
        case SET_ARRANGEMENTS:
            return {
                ...state, 
                arrangements: action.payload
            };
        default: 
            return state;
    }
}

export default reducer;