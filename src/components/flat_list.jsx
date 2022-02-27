import React, { Component } from 'react';
import Flat from './flat.jsx'

class FlatList extends Component {
  render() {
    return this.props.flats.map(flat => {
      return <Flat flat={flat} key={flat.name} />;
    });
  }
}

export default FlatList;