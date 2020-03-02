import {loadUser,singInStatus,userStatus} from './user.utils';
import {userActionType} from './user.type';
const INITIAL_STATE = {
    user:null,
    errorMessage: undefined,
    route: 'signin', 
    isSignIn: false
}

const userReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case userActionType.ROUTE_CHANGE:
            return {
                ...state,
                route:action.payload,
                isSignIn:singInStatus(action.payload),
                user:userStatus(action.payload)
            }
        
        case userActionType.REQUEST_USER_PENDING:
            return {
                ...state
            }
        case userActionType.REQUEST_USER_SUCCESS:
            return {
                ...state,
                user:loadUser(action.payload),
                isSignIn: true,
                route: 'home'
            }
        case userActionType.REQUEST_USER_FAILED:
            return {
                ...state,
                errorMessage: action.payload
            }
        case userActionType.UPDATE_USER_COUNT:
            return {
                ...state,
                user: {...state.user,entries:action.payload}
            }
        default:
            return state;
    }
}

export default userReducer;

