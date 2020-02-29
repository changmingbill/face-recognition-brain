import React from 'react';
import {resetInputField} from '../../redux/sign-in-and-register/sign-in-and-register.action';
import {connect} from 'react-redux';
const Navigation = ({onRouteChange, isSignIn,resetInputField}) => {
	const signOut = () => {
		resetInputField();
		onRouteChange('signin');
	}
		if (isSignIn) {
			return (
				<nav className='flex justify-end'>
					<p onClick={() => signOut()} className="f3 pa3 dim black pointer underline upper-z-index">Sign Out</p>
				</nav>
			)
		}else{
			return (
				<nav className='flex justify-end'>
					<p onClick={() => onRouteChange('signin')} className="f3 pa3 dim black pointer underline upper-z-index">Sign In</p>
					<p onClick={() => onRouteChange('register')} className="f3 pa3 dim black pointer underline upper-z-index">Register</p>
				</nav>
			)
		}
		
	
}

const mapDispatchToProps = dispatch => ({
	resetInputField: ()=>dispatch(resetInputField())
})

export default connect(null,mapDispatchToProps)(Navigation);