import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';

import rootReducer from './root-reducer';

const middlewares = [logger];
//applyMiddleware(...middlewares) can apply multiple middlewares or applyMiddleware(logger)
const store = createStore(rootReducer, applyMiddleware(...middlewares));
export default store;