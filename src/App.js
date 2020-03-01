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
import {selectClarifaiBox,selectClarifaiCount,selectClarifaiImageUrl} from './redux/clarifai/clarifai.selector';
import {selectUser, selectIsSignIn, selectRoute} from './redux/user/user.selector';
import {fetchClarifaiStartAsync} from './redux/clarifai/clarifai.action';

// const app = new Clarifai.App({apiKey: ''});


class App extends Component{
  constructor(){
    super();
    this.state = {input:''};
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  render(){
    const {input} = this.state;
    const {isSignIn, route, onRouteChange,fetchClarifai,user,clarifaiCount,clarifaiBox,imageUrl} = this.props;
    return (
      <Fragment>
      
      <div className="App">
      <ParticleConponent/>
      <Navigation  onRouteChange={onRouteChange} isSignIn={isSignIn}/>
      { route === 'home' ? 
          <Fragment>
              <Logo />
              <Rank name={this.props.user.name} entries={clarifaiCount > 0 ?clarifaiCount : this.props.user.entries}/>
              <ImageLinkForm inputChange={this.onInputChange} imageSubmit={()=>fetchClarifai(input,user.id)} value={input} />
              <FaceRecognition imageUrl={imageUrl} boxArr={clarifaiBox} />
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
  onRouteChange: (routeName) => dispatch(routeChange(routeName)),
  fetchClarifai:(input,userId)=>dispatch(fetchClarifaiStartAsync(input,userId))
});

const mapStateToProps = createStructuredSelector({
  user: selectUser,//state means rootReducer; currentUser means user.reducer
  isSignIn:selectIsSignIn,
  route:selectRoute,
  clarifaiBox:selectClarifaiBox,
  clarifaiCount:selectClarifaiCount,
  imageUrl:selectClarifaiImageUrl
})
export default connect(mapStateToProps, mapDispatchToProps)(App);
// https://samples.clarifai.com/face-det.jpg