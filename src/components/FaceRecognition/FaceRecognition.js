import React, {Fragment} from 'react';
import './FaceRecognition.css'



const FaceRecognition = ({imageUrl, boxArr}) => {
	
	const boundingBox = boxArr.length > 0 ? boxArr.map((box)=>{
		return (
			<div className='bounding-box' 
			style={{top:box.top_row, right:box.right_col, bottom:box.bottom_row, left:box.left_col}}>
			</div>
		);
	}) : null;
	

	return (
		<Fragment>	
		<div className="center">
			<div className='absolute mt2'>
			
				<img id='inputImage' alt='' src={imageUrl} width='500px' height='auto'/>
				{boundingBox}
						
			</div>
		</div>	
		</Fragment>	
	)
}

export default FaceRecognition;