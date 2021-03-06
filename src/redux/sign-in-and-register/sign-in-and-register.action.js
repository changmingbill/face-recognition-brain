import {SignInActtionType} from './sign-in-and-register.type';
// import {apiCall} from '../../api/api';
export const setEmailField = (text) => ({
	type: SignInActtionType.CHANGE_EMAIL_FIELD,
	payload: text
});

export const setPasswordField = (text) => ({
	type: SignInActtionType.CHANGE_PASSWORD_FIELD,
	payload: text
});

export const setNameField = (text) => ({
	type: SignInActtionType.CHANGE_NAME_FIELD,
	payload: text
});

export const resetInputField = () => ({
	type: SignInActtionType.RESET_INPUT_FIELD,
});



