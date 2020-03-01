import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';//actual local storage object on our window browser
import userReducer from './user/user.reducer';
import dataInput from './sign-in-and-register/sign-in-and-register.reducer';
import clarifaiReducer from './clarifai/clarifai.reducer';
import {userActionType} from './user/user.type';

const appReducer = combineReducers({
    currentUser: userReducer,
    dataInput:dataInput,
    clarifai:clarifaiReducer
});

const persistConfig = {
    key: 'primary',
    storage,
    whiteList: ['currentUser'],//only cart need to persist
    blacklist: ['dataInput','clarifai']
};


const rootReducer = (state, action) => {
    if (action.type === userActionType.RESET_CURRENT_USER) {
     storage.removeItem('persist:primary')
      state = undefined
    }
  
    return appReducer(state, action);
};

export default persistReducer(persistConfig, rootReducer);