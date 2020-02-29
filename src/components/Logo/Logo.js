import React, {Fragment} from 'react';
import Tilt from 'react-tilt'
import './Logo.css';
import brain from './brain.png';
const Logo = () => {
	return (
		<Fragment>
		<div className="ma4 mt0">
			<Tilt className="Tilt  ba b--light-purple bw2 shadow-2 upper-z-index" options={{ max : 55, speed:1000}} style={{ height: 150, width: 150 }} >
	 			<div className="Tilt-inner pa3 grow"><img alt='logo' src={brain}/></div>
			</Tilt>
		</div>
		</Fragment>	
	)
}

export default Logo;