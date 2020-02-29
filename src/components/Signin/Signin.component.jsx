import React, {Fragment} from 'react';
import {connect} from 'react-redux';
import {setEmailField, setPasswordField} from '../../redux/sign-in-and-register/sign-in-and-register.action';
import {signInRequestStartAsync} from '../../redux/user/user.action';
import {createStructuredSelector} from 'reselect';
import {selectEmailInput, selectPasswordInput} from '../../redux/sign-in-and-register/sign-in-and-register.selector';
import {selectUser} from '../../redux/user/user.selector';

class Signin extends React.Component  {

	componentDidUpdate(){
		
		if (this.props.user){
			this.props.onRouteChange('home');
		}
	}
	render(){
	const {onEmailChange,onPasswordChange,signInEmail,signInPassword,onRouteChange,signInRequestStartAsync} = this.props;
	return (
		<Fragment>	
			<div className="br3 ba dark-gray b--black-10 mv4 w-50-m w-25-l shadow-5 mw6 center">
			<main className="pa4 black-80 upper-z-index">
				<div className="measure">
				<fieldset id="sign_up" className="ba b--transparent ph0 mh0">
					<legend className="f1 fw6 ph0 mh0">Sign In</legend>
					<div className="mt3">
					<label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
					<input onChange={onEmailChange} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address"/>
					</div>
					<div className="mv3">
					<label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
					<input onChange={onPasswordChange} className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password"/>
					</div>
				</fieldset>
				<div className="">
					<input 
						onClick={()=>signInRequestStartAsync(signInEmail,signInPassword)}
						className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
						type="submit" 
						value="Sign in"
					/>
				</div>
				<div className="lh-copy mt3">
					<p onClick={() => onRouteChange('register')} href="#0" className="f6 link dim black db pointer ">Register</p>
				</div>
				</div>
			</main>
			</div>

		</Fragment>	
		)		
	}
	
}
const mapDispatchToProps = dispatch => ({
	onEmailChange: (event) => dispatch(setEmailField(event.target.value)),//user means payload content pass to reducer
	onPasswordChange: (event) => dispatch(setPasswordField(event.target.value)),
	signInRequestStartAsync: (email,password) => dispatch(signInRequestStartAsync(email,password))
	
  });
  
const mapStateToProps = createStructuredSelector(
	{
	signInEmail: selectEmailInput,//state means rootReducer; emailInput means signInEmail.reducer
	signInPassword: selectPasswordInput,
	user:selectUser
	}
);

export default connect(mapStateToProps, mapDispatchToProps)(Signin);
