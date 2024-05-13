const baseUrl = 'https://f2e1-81-235-135-70.ngrok-free.app/api';

// const baseUrl = "https://pokeapi.co/api/v2";

import axios from "axios";

const StatusCode = {
    INTERNAL_SERVER_ERROR: 500
}

export async function apiGet(route) {
    const response = await axios.get(`${baseUrl}/${route}`);
    return response.data;
}

// headers: {
//     'Accept': 'application/json',
//     'Content-Type': 'application/json'
// }

export function apiPost(route, body) {
    return async (_, getState) => {

        const token = getState().authentication.token;

        const config = token ? { 
            headers: {
                'Authorization': `Bearer ${token}`
            }
        } : {}

        const response = await axios.post(`${baseUrl}/${route}`, body, config).catch(function (error) {
            console.log("error");
            if (error.response) {
                console.log(error.response)

            } else if (error.request) {
                console.log(error.request)
            } else {

            }
        });

        return response.data;
    }
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