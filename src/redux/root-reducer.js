import {combineReducers} from 'redux';

import userReducer from './user/user.reducer';
import dataInput from './sign-in-and-register/sign-in-and-register.reducer';
//combineReducers return one giant object
export default combineReducers({
    currentUser: userReducer,
    dataInput:dataInput
    
});