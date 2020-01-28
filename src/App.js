import React, {Component, Fragment} from 'react';
import './App.css';
import Particles from 'react-particles-js';
// import Clarifai from 'clarifai';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Signin from './components/Signin/Signin.component';
import Register from './components/Register/Register.component';

// const app = new Clarifai.App({apiKey: ''});

const particleOptions = {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 700
      }
    }
    
  }
};
const initialState = {
      input:"",
      imageUrl: "",
      box: [],
      route: 'signin', 
      isSignIn: false,
      user : {
        id: '',
        name: '',
        email: '',
        entries: 0,
        joined: ''
      }
}

class App extends Component{
  constructor(){
    super();
    this.state = initialState;
  }

  // componentDidMount(){
  //   fetch('http://localhost:3000/')
  //   .then(response=> response.json())
  //   .then(console.log);
  // }
  loadUser = (data) => {
    this.setState({
      user : {
        id: data.id,
        name: data.name,
        email: data.email,
        entries: data.entries,
        joined: data.joined
      }
    })
  }

  calculateFaceLocation = (data) => {
    // const pos = data.outputs[0].data.regions[0].region_info.bounding_box;
    const regions = data.outputs[0].data.regions;
    const posArr = regions.map(region=>{
      return region.region_info.bounding_box;
    })
    
    const inputImage = document.getElementById('inputImage');
    const width = Number(inputImage.width);
    const height = Number(inputImage.height);
    const boxArr = posArr.map(pos=>{
      return this.calculateBox(pos, width, height);
    })
    return boxArr;
  }

  calculateBox = (pos, width, height) => {
    const box = { 
      top_row : pos.top_row * height, 
      left_col : pos.left_col * width, 
      bottom_row : height - (pos.bottom_row * height),
      right_col : width - (pos.right_col * width)
    };

    return box;
  }

  displayFaceBox = (box) => {
    this.setState({box : box});
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  onRouteChange = (route) => {
    if (route === 'home'){
      this.setState({isSignIn: true});
    }else{
       this.setState(initialState);
    }
    this.setState({route: route});
  }

  onImageSubmit = () => {

    this.setState({imageUrl: this.state.input});
    // app.models
    // .predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
    fetch('https://dry-anchorage-94607.herokuapp.com/imageurl',{
        method: 'post',
        headers: {
         'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          input: this.state.input
        })
          
    })
    .then(response => response.json())
    .then(response => {
      if (response){
        fetch('https://dry-anchorage-94607.herokuapp.com/image',{
        method: 'PUT',
        headers: {
         'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          id: this.state.user.id
        })
          
        })
        .then(res=> res.json())
        .then(count => {
          this.setState(Object.assign(this.state.user, {entries: count})); 
        })
        .catch((err)=>console.log);
      }
      this.displayFaceBox(this.calculateFaceLocation(response));
    })
    .catch(error => console.log(error));

  }

  render(){
    const {imageUrl, box, route, isSignIn} = this.state;
    // console.log('box = ',box);
    return (
      <div className="App">
      <Particles className='particles' params={particleOptions}/>
        <Navigation onRouteChange={this.onRouteChange} isSignIn={isSignIn}/>
      { route === 'home' ? 
         <Fragment>
            <Logo />
            <Rank name={this.state.user.name} entries={this.state.user.entries}/>
            <ImageLinkForm inputChange={this.onInputChange} imageSubmit={this.onImageSubmit}/>
            <FaceRecognition imageUrl={imageUrl} boxArr={box} />
          </Fragment>
        :(
          route === 'signin' ?
          <Signin loadUser={this.loadUser} onRouteChange={this.onRouteChange}/> : 
          <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
        )
      }
      </div>
    );
  }
}

export default App;
// https://samples.clarifai.com/face-det.jpg