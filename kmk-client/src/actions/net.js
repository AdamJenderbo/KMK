const url = "https://localhost:7106/api/";


export async function apiGet(route) {
    const response = await fetch(`${url}${route}/`);
    const payload = await response.json();
    return payload;
}

export async function apiPost(route, body) {
    const response = await fetch(`${url}${route}/`, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    });
    const payload = await response.json();
    return payload;
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


export async function apiDelete(route) {
    await fetch(`${url}${route}/`, {
        method: 'DELETE'
    });
}