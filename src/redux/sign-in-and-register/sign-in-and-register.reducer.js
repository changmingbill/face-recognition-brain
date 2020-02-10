import {SignInActtionType} from './sign-in-and-register.type';

const INITIAL_EMAIL_STATE = {
    email: ''
}

export const emailInput = (state=INITIAL_EMAIL_STATE, action={}) => {
    switch(action.type){
        case SignInActtionType.CHANGE_EMAIL_FIELD:
            return Object.assign({}, state, {email: action.payload});
            // return {...state, searchField: action.payload};
        default:
            return state;
    }
};

const INITIAL_PASSWORD_STATE = {
    password: ''
}

export const passwordInput = (state=INITIAL_PASSWORD_STATE, action={}) => {
    switch(action.type){
        case SignInActtionType.CHANGE_PASSWORD_FIELD:
            return Object.assign({}, state, {password: action.payload});
            // return {...state, searchField: action.payload};
        default:
            return state;
    }
};

const INITIAL_NAME_STATE = {
    name: ''
}

export const nameInput = (state=INITIAL_NAME_STATE, action={}) => {
    switch(action.type){
        case SignInActtionType.CHANGE_NAME_FIELD:
            return Object.assign({}, state, {name: action.payload});
            // return {...state, searchField: action.payload};
        default:
            return state;
    }
};

// const signInReducer = (state = INITIAL_STATE, action) => {
//     switch(action.type){
//         case 'SIGN_IN_ACTION':
//             return {
//                 ...state,
//                 data: action.payload
//             }
//         default:
//             return state;
//     }
// }

// export signInReducer;