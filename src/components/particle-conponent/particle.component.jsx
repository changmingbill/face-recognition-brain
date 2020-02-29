import React  from 'react';
import Particles from 'react-particles-js';

const particleOptions = {
    "particles": {
      "number": {
          "value": 120
      },
      "size": {
          "value": 3
      }
  },
  "interactivity": {
      "events": {
          "onhover": {
              "enable": true,
              "mode": "repulse"
          }
      }
  }
};
const ParticleConponent = () => (
        <Particles params={particleOptions} style={{position:'fixed',right:'0',top:'0',width:'100%',height:'100%'}}/>
);

export default ParticleConponent;