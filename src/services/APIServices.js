import {getToken} from "./StorageService";

export const makeRequest = (url, args) => {
    return fetch(url, args);
};

export const makeAuthRequest = (url, args) => {
    const {headers} = args;
    const token = getToken();

    const headersComputed = {...headers, 'Authorization': token};

    const argsComputed = {
        ...args,
        headers: headersComputed
    };

    return fetch(url, argsComputed);
};