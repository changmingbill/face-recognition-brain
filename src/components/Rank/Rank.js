import React, {Fragment} from 'react';

const Rank = ({name, entries}) => {
	return (
		<Fragment>
			<div className='center white f3'>
				{name + ', your current rank is...'}
			</div>
			<div className='center white f1'>
				{'#'+ entries}
			</div>
		</Fragment>
	)
}

export default Rank;