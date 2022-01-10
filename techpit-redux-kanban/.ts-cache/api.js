export const Endpoint = process.env.API_ENDPOINT || 'http://localhost:3000/api';
export async function api(key, payload) {
    const [method, path] = key.split(' ');
    if (!method || !path) {
        throw new Error(`Unrecognized api: ${key}`);
    }
    let pathWithID = '';
    const option = { method };
    switch (option.method) {
        case 'GET':
        case 'DELETE':
            if (payload && 'id' in payload) {
                pathWithID = `${path}/${payload.id}`;
            }
            break;
        case 'POST':
            option.headers = { 'Content-Type': 'application/json' };
            option.body = JSON.stringify(payload);
            break;
        case 'PATCH':
            if (payload && 'id' in payload) {
                pathWithID = `${path}/${payload.id}`;
            }
            option.headers = { 'Content-Type': 'application/json' };
            option.body = JSON.stringify(payload);
            break;
    }
    return fetch(`${Endpoint}${pathWithID || path}`, option).then(res => res.ok
        ? res.json()
        : res.text().then(text => {
            throw new APIError(method, res.url, res.status, res.statusText, res.ok, res.redirected, res.type, text);
        }));
}
export class APIError extends Error {
    constructor(method, url, status, statusText, ok, redirected, type, text) {
        super(`${method} ${url} ${status} (${statusText})`);
        this.method = method;
        this.url = url;
        this.status = status;
        this.statusText = statusText;
        this.ok = ok;
        this.redirected = redirected;
        this.type = type;
        this.text = text;
    }
}
