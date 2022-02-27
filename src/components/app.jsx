import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import flats from '../data/flats.js'

import FlatList from './flat_list.jsx'
import Marker from './marker.jsx'

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      flats: flats,
      selectedFlat: flats[0]
    }
  }

  center() {
    return {
      lat: this.state.selectedFlat.lat,
      lng: this.state.selectedFlat.lng
    };
  }

  selectFlat = (flat) => {
    this.setState({
      selectedFlat: flat
    });
  }

  render() {
    return (
      <div>
        <div className="flat-list">
          <FlatList flats={this.state.flats} selectFlat={this.selectFlat} />
        </div>
        <div className="map-container">
          <GoogleMapReact center={this.center()} defaultZoom={17} >
            <Marker lat={this.state.selectedFlat.lat} lng={this.state.selectedFlat.lng} />
          </GoogleMapReact>/>
        </div>
      </div>
    );
  }
}

export default App;