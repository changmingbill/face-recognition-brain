import React, {Fragment, Component} from 'react';
import {connect} from 'react-redux';
import {setEmailField, setPasswordField} from '../../redux/sign-in/sign-in.action';
import {setCurrentUser} from '../../redux/user/user.action';

class Signin extends Component {
	

	onSubmitSignin = () => {
		fetch('https://dry-anchorage-94607.herokuapp.com/signin',{
			method: 'POST',
			headers: {
   			 'Content-Type': 'application/json'
  			},
			body: JSON.stringify({
				email: this.props.signInEmail,
				password: this.props.signInPassword
			})
			
		})
		.then(reponse=> reponse.json())
		.then(user => {
			if (user.id){
				this.props.loadUser(user);
				this.props.onRouteChange('home');
			}
		})
		.catch((err)=>console.log);
		

	}

	render(){
		const {onRouteChange} = this.props;
		return (
		<Fragment>	
			<div className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l shadow-5 mw6 center">
			<main className="pa4 black-80">
				<div className="measure">
				<fieldset id="sign_up" className="ba b--transparent ph0 mh0">
				  <legend className="f1 fw6 ph0 mh0">Sign In</legend>
				  <div className="mt3">
				    <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
				    <input onChange={this.props.onEmailChange} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address"/>
				  </div>
				  <div className="mv3">
				    <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
				    <input onChange={this.props.onPasswordChange} className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password"/>
				  </div>
				</fieldset>
				<div className="">
				  <input 
				  	  onClick={this.onSubmitSignin}
					  className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
					  type="submit" 
					  value="Sign in"
				  />
				</div>
				<div className="lh-copy mt3">
			      <p onClick={() => onRouteChange('register')} href="#0" className="f6 link dim black db pointer">Register</p>
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
	loadUser: data => dispatch(setCurrentUser(data))
  });
  
  const mapStateToProps = (state) => {
	return{
		signInEmail: state.emailInput.signInEmail,//state means rootReducer; emailInput means signInEmail.reducer
		signInPassword: state.passwordInput.signInPassword
  	}
  }
  
export default connect(mapStateToProps, mapDispatchToProps)(Signin);