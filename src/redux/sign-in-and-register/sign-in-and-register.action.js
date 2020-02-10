import {SignInActtionType} from './sign-in-and-register.type';

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

export const signInFetch = () => ({
	type:SignInActtionType,
	payload:""
})

