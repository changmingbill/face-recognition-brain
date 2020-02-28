import {SignInActtionType} from './sign-in-and-register.type';

const INITIAL_STATE = {
    email: '',
    password: '',
    name: '',
    
}

const dataInput = (state=INITIAL_STATE, action={}) => {
    switch(action.type){
        case SignInActtionType.CHANGE_PASSWORD_FIELD:
            return Object.assign({}, state, {password: action.payload});
            // return {...state, searchField: action.payload};
        case SignInActtionType.CHANGE_EMAIL_FIELD:
            return Object.assign({}, state, {email: action.payload});
            // return {...state, searchField: action.payload};
        case SignInActtionType.CHANGE_NAME_FIELD:
            return Object.assign({}, state, {name: action.payload});
        default:
            return state;
    }
};

export default dataInput;



