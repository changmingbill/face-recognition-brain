import React, {Fragment, Component} from 'react';
import {connect} from 'react-redux';
import {setEmailField, setPasswordField, setNameField} from '../../redux/sign-in-and-register/sign-in-and-register.action';
import {signInRequestSuccess,registerRequestStartAsync} from '../../redux/user/user.action';
import {createStructuredSelector} from 'reselect';
import {selectEmailInput, selectPasswordInput, selectNameInput} from '../../redux/sign-in-and-register/sign-in-and-register.selector';
import {selectUser} from '../../redux/user/user.selector';

class Register extends Component{
	
	componentDidUpdate(){
		if (this.props.user){
			this.props.onRouteChange('home');
		}
	}

	render(){
		const {onEmailChange, onPasswordChange, onNameChange,registerRequestStartAsync, email,password,name} = this.props;
		return (
		<Fragment>	
			<div className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l shadow-5 mw6 center">
			<main className="pa4 black-80">
				<div className="measure">
				<fieldset id="sign_up" className="ba b--transparent ph0 mh0">
				  <legend className="f1 fw6 ph0 mh0">Register</legend>
				  <div className="mt3">
				    <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
				    <input onChange={onNameChange} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="name"  id="name"/>
				  </div>
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
				  	  onClick={()=>registerRequestStartAsync(email,password,name)}
					  className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
					  type="submit" 
					  value="Register"
				  />
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
	onNameChange: (event) => dispatch(setNameField(event.target.value)),
	loadUser: user => dispatch(signInRequestSuccess(user)),
	registerRequestStartAsync:(email,password,name) => dispatch(registerRequestStartAsync(email,password,name))
  });
  
const mapStateToProps = createStructuredSelector(
	{
		email: selectEmailInput,//state means rootReducer; emailInput means signInEmail.reducer
		password: selectPasswordInput,
		name:selectNameInput,
		user:selectUser
	}
);

export default connect(mapStateToProps, mapDispatchToProps)(Register);