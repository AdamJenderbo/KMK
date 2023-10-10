import { EDIT_EVENT, SET_EVENTS, SET_EVENT } from "../actions/event";

const defaultState = {
    events: [],
    event: {
        year: 2023,
        month: 1,
        day: 1,
        title: "",
        description: ""
    },
    test: "test"
}

const reducer =  (state = defaultState, action) => {
    switch(action.type) {
        case SET_EVENTS:
            return {
                ...state,
                events: action.events
            }
        case SET_EVENT:
            return {
                ...state,
                event: action.event
            }
        case EDIT_EVENT:
            return {
                ...state,
                event: {
                    ...state.event,
                    ...action.change
                }
            }
        default: 
            return state;
    }
}

export default reducer;