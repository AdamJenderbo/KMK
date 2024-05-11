const baseUrl = 'https://c6cd-81-235-135-70.ngrok-free.app/api';

// const baseUrl = "https://pokeapi.co/api/v2";

import axios from "axios";

const StatusCode = {
    INTERNAL_SERVER_ERROR: 500
}

export async function apiGet(route) {
    const options = {method: 'GET', url: `${baseUrl}/${route}`}
    const response = await axios.request(options);
    return response.data;
}

// headers: {
//     'Accept': 'application/json',
//     'Content-Type': 'application/json'
// }

export async function apiPost(route, body) {
    const response = await axios.post(`${baseUrl}/${route}`, body).catch(function (error) {
        console.log("error");
        if (error.response) {

        } else if (error.request) {

        } else {

        }
    });
    
    if(response.status == StatusCode.INTERNAL_SERVER_ERROR) {
        console.error("internal server error");
        return;
    }

    return response.data;
}

export async function apiPut(route, body) {
    await fetch(`${url}${route}/`, {
        method: 'PUT',
        body: JSON.stringify(body),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    });
}