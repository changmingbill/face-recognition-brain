import React, {Component, Fragment} from 'react';
import './App.scss';
import ParticleConponent from './components/particle-conponent/particle.component';
// import Clarifai from 'clarifai';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Signin from './components/Signin/Signin.component';
import Register from './components/Register/Register.component';
import {connect} from 'react-redux';
import {resetCurrentUser,routeChange} from './redux/user/user.action';
import {createStructuredSelector} from 'reselect';

import {selectUser, selectIsSignIn, selectRoute} from './redux/user/user.selector';

// const app = new Clarifai.App({apiKey: ''});


const initialState = {
      input:"",
      imageUrl: "",
      box: []
}

class App extends Component{
  constructor(){
    super();
    this.state = initialState;
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

  onRouteChange = (routeName) => {
    if (routeName === 'home'){
      // this.setState({isSignIn: true});
    }else{
      
       this.setState(initialState);
       this.props.resetUser();
    }
    this.setState({route: routeName});
  }

  onImageSubmit = () => {

    this.setState((prevState, prevProps)=> ({imageUrl: prevState.input}));
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
          id: this.props.user.id
        })
          
        })
        .then(res=> res.json())
        .then(count => {
          this.setState(Object.assign(this.props.user, {entries: count})); 
        })
        .catch((err)=>console.log);
      }
      this.displayFaceBox(this.calculateFaceLocation(response));
      
    })
    .catch(error => console.log(error));
    
  }

  render(){
    const {imageUrl, box} = this.state;
    const {isSignIn, route, onRouteChange} = this.props;
    return (
      <Fragment>
      
      <div className="App">
      <ParticleConponent/>
      <Navigation  onRouteChange={onRouteChange} isSignIn={isSignIn}/>
      { route === 'home' ? 
          <Fragment>
              <Logo />
              <Rank name={this.props.user.name} entries={this.props.user.entries}/>
              <ImageLinkForm inputChange={this.onInputChange} imageSubmit={this.onImageSubmit} value={this.state.input} />
              <FaceRecognition imageUrl={imageUrl} boxArr={box} />
            </Fragment>
          :(
            route === 'signin' ?
            <Signin onRouteChange={onRouteChange}/> : 
            <Register onRouteChange={onRouteChange}/>
          )
        }
          
      </div>
      </Fragment>
      
    );
  }
}
const mapDispatchToProps = dispatch => ({
  resetUser: ()=>dispatch(resetCurrentUser()),//user means payload content pass to reducer
  onRouteChange: (routeName) => dispatch(routeChange(routeName))
});

const mapStateToProps = createStructuredSelector({
  user: selectUser,//state means rootReducer; currentUser means user.reducer
  isSignIn:selectIsSignIn,
  route:selectRoute
})
export default connect(mapStateToProps, mapDispatchToProps)(App);
// https://samples.clarifai.com/face-det.jpg