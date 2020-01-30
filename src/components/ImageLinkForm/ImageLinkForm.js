import React, {Fragment} from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({inputChange, imageSubmit}) => {
	return (
		<Fragment>
			<div>
				<p id='title' className="f3">{'This Magic Brain will detect faces in your pictures. Give it a try'}</p>
			</div>
			<div className='center'>
				<div className="pa4 br2 shadow-5 HoneyComb form center">
					<input className='f4 w-two-thirds pa2 br2' onInput={inputChange} type='text'/>
					<button className='f3 ml2 w-one-thirds ph3 br2 pv2 bg-light-purple ba bw0 white grow' onClick={imageSubmit}>Detect</button>
				</div>
			</div>
		</Fragment>
	)
}

export default ImageLinkForm;