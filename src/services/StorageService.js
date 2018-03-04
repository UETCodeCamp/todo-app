const prefix = 'com.uet.codeCamp';

const _getRealKey = (key, noPrefix = false) => {
    if (noPrefix) {
        return key;
    }

    return prefix + key;
};

export const getLocalStorage = (key, defaultValue = null, noPrefix = false) => {
    const value = localStorage.getItem(_getRealKey(key, noPrefix)) || defaultValue;

    try {
        return JSON.parse(value);
    } catch (e) {
        return value;
    }
};

export const setLocalStorage = (key, value, noPrefix = false) => {
    const type = typeof(value);
    if (type === 'object') {
        value = JSON.stringify(value);
    }

    return localStorage.setItem(_getRealKey(key, noPrefix), value);
};

export const removeLocalStorage = (key) => {
    return localStorage.removeItem(_getRealKey(key));
};

export const getUserData = () => {
    return getLocalStorage('user') || {};
};

export const setUserData = (data) => {
    return setLocalStorage('user', data);
};

export const removeUserData = () => {
    return removeLocalStorage('user');
};

export const getToken = () => {
    return getLocalStorage('token');
};

export const setToken = (token) => {
    return setLocalStorage('token', token);
};
