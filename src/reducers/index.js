import {combineReducers} from 'redux';
import auth, {NAME as authNAME} from "./auth";


export default combineReducers({
    [authNAME]: auth
});