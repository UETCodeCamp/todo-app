const config = {
    baseUrl: {
        $default: 'http://localhost:3000',
        production: 'https://uetcc-todo-app.netlify.com'
    },
    baseAPIUrl: {
        $default: '/api',
        staging: 'https://uetcc-todo-app.herokuapp.com',
        production: 'https://uetcc-todo-app.herokuapp.com',
    }
};

const _getEnvironment = () => {
    return process.env.REACT_APP_ENV || 'development';
};

export default (key, defaultValue = null) => {
    if (!config.hasOwnProperty(key)) {
        return defaultValue;
    }

    const env = _getEnvironment();
    const _dataConfig = config[key];

    return _dataConfig[env] ? _dataConfig[env] : _dataConfig['$default'] || defaultValue;
};