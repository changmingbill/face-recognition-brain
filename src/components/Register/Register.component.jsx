import React, {Fragment, Component} from 'react';
import {connect} from 'react-redux';
import {setEmailField, setPasswordField, setNameField} from '../../redux/sign-in-and-register/sign-in-and-register.action';
import {setCurrentUser} from '../../redux/user/user.action';

class Register extends Component{
	constructor(props){
		super(props);
		this.state = {
			email: '',
			passowrd: '',
			name: ''
		}
	}

	onNameChange = (event) =>{
		this.setState({name:event.target.value});
		
	}

	onEmailChange = (event) =>{
		this.setState({email:event.target.value});
		
	}

	onPasswordChange = (event) =>{
		this.setState({passowrd:event.target.value});
		// console.log(event.target.value);
	}

	onSubmitRegister = () =>{
		fetch('https://dry-anchorage-94607.herokuapp.com/register',{
			method: 'POST',
			headers: {
   			 'Content-Type': 'application/json'
  			},
			body: JSON.stringify({
				email: this.props.email,
				password: this.props.password,
				name: this.props.name
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
		const {onEmailChange, onPasswordChange, onNameChange} = this.props;
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
				  	  onClick={this.onSubmitRegister}
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
	loadUser: data => dispatch(setCurrentUser(data))
  });
  
const mapStateToProps = (state) => {
return{
	email: state.emailInput.email,//state means rootReducer; emailInput means signInEmail.reducer
	password: state.passwordInput.password,
	name: state.nameInput.name
}
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);