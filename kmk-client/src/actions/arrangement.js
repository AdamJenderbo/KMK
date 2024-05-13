import { apiPost } from "./net";

export const SET_ARRANGEMENTS = "SET_ARRANGEMENTS";

export function getArrangements() {
    return async (dispatch) => {
        const arrangements = await dispatch(apiPost("arrangement/get", {
            sorting: "",
            filter: ""
        }));

        dispatch({type: SET_ARRANGEMENTS, payload: arrangements});

        console.log("Loaded arrangements")
    }
}

export function createArrangement(arrangement) {
    return async (dispatch) => {
        const response = await dispatch(apiPost("arrangement/create", {
            ...arrangement, 
            serialNumber: parseInt(arrangement.serialNumber)
        }));
    
        return response;
    }
}