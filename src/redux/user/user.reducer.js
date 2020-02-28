import {loadUser} from './user.utils';
import {userActionType} from './user.type';
const INITIAL_STATE = {
    user:null,
    errorMessage: undefined
}

const userReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case userActionType.RESET_CURRENT_USER:
            return {
                ...state,
                user: null
            }
        case userActionType.REQUEST_USER_PENDING:
            return {
                ...state
            }
        case userActionType.REQUEST_USER_SUCCESS:
            return {
                ...state,
                user:loadUser(action.payload)
            }
        case userActionType.REQUEST_USER_FAILED:
            return {
                ...state,
                errorMessage: action.payload
            }
        default:
            return state;
    }
}

export default userReducer;

