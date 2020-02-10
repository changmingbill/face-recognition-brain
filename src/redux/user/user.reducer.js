import {loadUser} from './user.utils';
const INITIAL_STATE = {
      user : {
        id: '',
        name: '',
        email: '',
        entries: 0,
        joined: ''
      }
}

const userReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'SET_CURRENT_USER':
            return {
                ...state,
                user: loadUser(action.payload)
            }
        default:
            return state;
    }
}

export default userReducer;