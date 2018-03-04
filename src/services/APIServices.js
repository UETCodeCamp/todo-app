import {getToken} from "./StorageService";
import getEnv from "../helpers/common/getEnv";

const baseURL = getEnv('baseAPIUrl');

export const makeRequest = (uri = '/', args) => {
    return fetch(baseURL + uri, args);
};

export const makeAuthRequest = (uri = '/', args) => {
    const {headers} = args;
    const token = getToken();

    const headersComputed = {...headers, 'Authorization': token};

    const argsComputed = {
        ...args,
        headers: headersComputed
    };

    return fetch(baseURL + uri, argsComputed);
};