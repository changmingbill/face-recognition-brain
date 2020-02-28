import {userActionType} from './user.type';

export const resetCurrentUser = () => ({
    type: userActionType.RESET_CURRENT_USER
});

export const signInRequestPending = () => ({
	type:userActionType.REQUEST_USER_PENDING
	
});

export const signInRequestSuccess = (user) => ({
	type:userActionType.REQUEST_USER_SUCCESS,
	payload:user
});

export const signInRequestFailure = (errorMessage) => ({
	type:userActionType.REQUEST_USER_SUCCESS,
	payload:errorMessage
});

export const signInRequestStartAsync = (email,password) => (dispatch) => {
	if (email==='' || password ===''){return};
	dispatch(signInRequestPending());
	fetch('https://dry-anchorage-94607.herokuapp.com/signin',{
			method: 'POST',
			headers: {
   			 'Content-Type': 'application/json'
  			},
			body: JSON.stringify({
				email: email,
				password: password
			})
			
		})
	.then(reponse=> reponse.json())
	.then(user => {
		if (user.id){
			dispatch(signInRequestSuccess(user));
		}
	})
	.catch((err)=>signInRequestFailure(err));
};

export const registerRequestStartAsync = (email, password, name) => (dispatch) => {
	if (email==='' || password ==='' || name === ''){return};
	dispatch(signInRequestPending());
	fetch('https://dry-anchorage-94607.herokuapp.com/register',{
			method: 'POST',
			headers: {
   			 'Content-Type': 'application/json'
  			},
			body: JSON.stringify({
				email: email,
				password: password,
				name: name
			})
			
		})
		.then(reponse=> reponse.json())
		.then(user => {
			if (user.id){
				dispatch(signInRequestSuccess(user));
			}
		})
		.catch((err)=>signInRequestFailure(err));
};




