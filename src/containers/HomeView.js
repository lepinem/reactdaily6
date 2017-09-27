// HomeView.js

import React, { Component } from 'react'
import rotating from '../rotating.mp4'

export default class HomeView extends Component {
  render(){
    return(
      <div className='homer'>
        <video autoPlay id="video-background" >
          <source src={rotating} type="video/mp4" />
        </video>
      </div>
    )
  }
}
