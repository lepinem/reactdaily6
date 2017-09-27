// ImageDump.js

import React, {Component} from 'react'

export default class ImageDump extends Component{
  render(){
    return(
      <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item">
            <img className="d-block w-100" src={this.props.roverPhotos} alt="First slide" />
          </div>
        </div>
      </div>
    )
  }
}
