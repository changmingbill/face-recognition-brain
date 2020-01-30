import React, {Fragment} from 'react';

const Rank = ({name, entries}) => {
	return (
		<Fragment>
			<div className='center white f3' style={{fontSize:`3rem`, fontFamily: 'Open Sans Condensed, sans-serif'}}>
				{name + ', your current rank is...'}
			</div>
			<div className='center white f1'>
				{'#'+ entries}
			</div>
		</Fragment>
	)
}

export default Rank;