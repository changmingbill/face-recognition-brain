import React, {Fragment} from 'react';

const Navigation = ({onRouteChange, isSignIn}) => {
	
		if (isSignIn) {
			return (
				<nav className='flex justify-end '>
					<p onClick={() => onRouteChange('signin')} className="f3 pa3 dim black pointer underline">Sign Out</p>
				</nav>
			)
		}else{
			return (
			<Fragment>
				<nav className='flex justify-end '>
					<p onClick={() => onRouteChange('signin')} className="f3 pa3 dim black pointer underline">Sign In</p>
					<p onClick={() => onRouteChange('register')} className="f3 pa3 dim black pointer underline">Register</p>
				</nav>
			</Fragment>
			)
		}
		
	
}

export default Navigation;