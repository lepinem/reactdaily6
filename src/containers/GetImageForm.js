// GetImageForm.js

import React, { Component } from 'react'
import GetImageButton from '../components/GetImageButton'
import ImageDump from '../components/ImageDump'
const API_KEY = "qIGt51A9JVp8g61hCGyeqaQCriTlFqqeyNDDRHQ3"

export default class GetImageForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      rover: 'Curiosity',
      camera: 'FHAZ',
      images: [],
      sol: ''
    }
  }

  handleRoverChange = (event) => {
    event.preventDefault()
    this.setState({
      rover: event.target.value
    })
  }

  handleCameraChange = (event) => {
    event.preventDefault()
    this.setState({
      camera: event.target.value
    })
  }

  handleSolChange = (event) => {
    event.preventDefault()
    this.setState({
      sol: event.target.value
    })
  }

  fetchRoverImage = (event) => {
    let cam = this.state.camera
    let rove = this.state.rover
    let num = this.state.sol
    let imageUrl = `https://api.nasa.gov/mars-photos/api/v1/rovers/${rove}/photos?sol=${num}&camera=${cam}&api_key=${API_KEY}`
    this.props.roverPics(imageUrl)
  }

  render() {
    return(
      <div className="getPics">
        <div className='card'>
          <div className='card-header'>
            <h3>MARTIAN ROVER PICS</h3>
          </div>
          <form className="form-horizontal">
            <fieldset>
              <div className="form-group">
                <br></br>
                <div className="roverSet">
                  <div className="col-lg-10">
                    <select className="form-control" onChange={this.handleRoverChange} value={this.state.value} id="rover">
                      <option>ROVER</option>
                      <option value='curiosity'>Curiosity</option>
                      <option value='opportunity'>Opportunity</option>
                      <option value='spirit'>Spirit</option>
                    </select>
                  </div>
                </div>
                <br></br>
                <div className="cameraSet">
                  <div className="col-lg-10">
                    <select className="form-control" onChange={this.handleCameraChange} value={this.state.value} id="camera">
                      <option>CAMERA</option>
                      <option value='fhaz'>FHAZ (Front Hazard)</option>
                      <option value='rhaz'>RHAZ (Rear Hazard)</option>
                      <option value='navcam'>NAVCAM (Navigation Cam)</option>
                    </select>
                  </div>
                </div>
                <br></br>
                <div className="solSet">
                  <div className="col-lg-10">
                    <input className="form-control" type="number" onChange={this.handleSolChange} max="2000" min="1000" value={this.state.value} placeholder="Sol: 1000-2000" id="sol"/>
                  </div>
                </div>
              </div>
            </fieldset>
          </form>
          <br></br>
          <div className="subSet">
              <GetImageButton
                fetchRoverImage={this.fetchRoverImage}
              />
          </div>
        </div>
      <div className='picWheel'>
        {this.props.photos.map((roverPhotos) => {
          return(
            <ImageDump
              key={roverPhotos.id}
              roverPhotos={roverPhotos.img_src}
            />
          )
        })}
      </div>
    </div>
)}}
