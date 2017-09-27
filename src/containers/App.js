// App.js

import React, { Component } from 'react'
import '../styles/App.css'
import { getRoverImage } from '../services'
import GetImageForm from './GetImageForm'
import HomeView from './HomeView'

class App extends Component {
  constructor(props){
    super(props)
      this.state={
        photos: []
      }
  }

  roverPics = (imageUrl) => {
    getRoverImage(imageUrl)
    .then((response) => {
      this.setState({
        photos: response.data.photos
      })
    })
  }

  render() {
    return (
      <div>
        <HomeView />
        <GetImageForm
          roverPics={this.roverPics}
          photos={this.state.photos}
        />
      </div>
    )
  }
}

export default App;
