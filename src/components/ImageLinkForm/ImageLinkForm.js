import React, {Fragment} from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({inputChange, imageSubmit, value}) => {
	// onInput={inputChange} 
	return (
		<Fragment>
			<div>
				<p id='title' className="f3">{'This Magic Brain will detect faces in your pictures. Give it a try'}</p>
			</div>
			<div className='center'>
				<div className="pa4 br2 shadow-5 HoneyComb form center upper-z-index">
					<input id='myInput' className='f4 w-two-thirds pa2 br2' 
					onChange={inputChange} 
					type='text' 
					value={value}
					onFocus={()=>{document.getElementById('myInput').value = ''}}
					required
					/>
					<button className='f3 ml2 w-one-thirds ph3 br2 pv2 bg-light-purple ba bw0 white grow' onClick={imageSubmit}>Detect</button>
				</div>
			</div>
		</Fragment>
	)
}

export default ImageLinkForm;