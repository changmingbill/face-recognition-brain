import {SignInActtionType} from './sign-in.type';

const INITIAL_EMAIL_STATE = {
    signInEmail: ''
}

export const emailInput = (state=INITIAL_EMAIL_STATE, action={}) => {
    switch(action.type){
        case SignInActtionType.CHANGE_EMAIL_FIELD:
            return Object.assign({}, state, {signInEmail: action.payload});
            // return {...state, searchField: action.payload};
        default:
            return state;
    }
};

const INITIAL_PASSWORD_STATE = {
    signInPassword: ''
}

export const passwordInput = (state=INITIAL_PASSWORD_STATE, action={}) => {
    switch(action.type){
        case SignInActtionType.CHANGE_PASSWORD_FIELD:
            return Object.assign({}, state, {signInPassword: action.payload});
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