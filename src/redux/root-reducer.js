import {combineReducers} from 'redux';

import userReducer from './user/user.reducer';
import {emailInput, passwordInput} from './sign-in/sign-in.reducer';
//combineReducers return one giant object
export default combineReducers({
    currentUser: userReducer,
    emailInput: emailInput,
    passwordInput: passwordInput
});