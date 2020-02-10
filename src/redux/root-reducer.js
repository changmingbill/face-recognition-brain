import {combineReducers} from 'redux';

import userReducer from './user/user.reducer';
import {emailInput, passwordInput, nameInput} from './sign-in-and-register/sign-in-and-register.reducer';
//combineReducers return one giant object
export default combineReducers({
    currentUser: userReducer,
    emailInput: emailInput,
    passwordInput: passwordInput,
    nameInput: nameInput
});