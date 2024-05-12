import { sendRequest } from "./net";

export const SET_ARRANGEMENTS = "SET_ARRANGEMENTS";

export function getArrangements() {
    return async (dispatch) => {
        const arrangements = await sendRequest("arrangement/get", {
            sorting: "",
            filter: ""
        });

        dispatch({type: SET_ARRANGEMENTS, payload: arrangements});

        console.log("Loaded arrangements")
    }
}

export function createArrangement(arrangement) {
    return async (dispatch) => {


        console.log(arrangement);
        const response = await sendRequest("arrangement/create", {
            ...arrangement, 
            serialNumber: parseInt(arrangement.serialNumber)
        });
    
        return response;
    }
}