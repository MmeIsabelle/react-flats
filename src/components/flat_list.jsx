import React, { Component } from 'react';
import Flat from './flat.jsx'

class FlatList extends Component {
  render() {
    return this.props.flats.map((flat, index) => {
      return <Flat flat={flat} key={flat.lat} selectFlat={this.props.selectFlat} />;
    });
    
  }
}

export default FlatList;