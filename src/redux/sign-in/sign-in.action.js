import {CHANGE_EMAIL_FIELD,
    CHANGE_PASSWORD_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
} from './constants.const';

export const setEmailField = (text) => ({
	type: CHANGE_EMAIL_FIELD,
	payload: text
});

export const setPasswordField = (text) => ({
	type: CHANGE_PASSWORD_FIELD,
	payload: text
});

// export const signInAction = signInData => ({
//     type: 'SIGN_IN_ACTION',
//     payload: signInData
// })