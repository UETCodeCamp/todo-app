import React from "react";
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from "../reducers";

let middlewareWrapper = applyMiddleware(thunk);

if (process.env.REACT_APP_ENV !== 'production') {
    const {composeWithDevTools} = require('redux-devtools-extension');
    middlewareWrapper = composeWithDevTools(middlewareWrapper);
}

const store = createStore(rootReducer, middlewareWrapper);

export default () => {
    return Promise.resolve(store);
}