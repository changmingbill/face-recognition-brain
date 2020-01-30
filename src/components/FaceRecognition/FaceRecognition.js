import React, {Fragment} from 'react';
import './FaceRecognition.styles.scss'
import Tilt from 'react-tilt';



const FaceRecognition = ({imageUrl, boxArr}) => {
	
	const boundingBox = boxArr.length > 0 ? boxArr.map((box)=>{
		return (
			<div className='bounding-box' 
			style={{top:box.top_row, right:box.right_col, bottom:box.bottom_row, left:box.left_col}}>
			</div>
		);
	}) : null;

	// let isVisible = 'hidden';
	
	// const image = new Image();
	// image.src = imageUrl;
	// console.log(imageUrl);
	// if (image.complete){
	// 	isVisible = 'visible';
	// }

	return (
		<Fragment>	
		<div className="center">
			<div className='absolute mt2'>
			<Tilt options={{ max : 20, speed:100, scale:1}} style={{width: 500, visibility:`visible`}} >
				<img id='inputImage' alt='' src={imageUrl} width='500px' height='auto'/>
			</Tilt>
				{boundingBox}
						
			</div>
		</div>	
		</Fragment>	
	)
}

export default FaceRecognition;