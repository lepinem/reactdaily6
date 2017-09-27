//GetImageButton.js

import React, {Component} from 'react'

export default class GetImageButton extends Component {
  render(){
    return(
      <div>
        <button className="btn btn-primary" onClick={this.props.fetchRoverImage}>Get Images</button>
      </div>
    )
  }
}
