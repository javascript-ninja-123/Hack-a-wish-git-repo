import React, { Component } from 'react';
import { GoogleMap, Marker, withGoogleMap, withScriptjs } from 'react-google-maps';

class GoogleMaps extends Component {
  render() {
    const { lat, lng, defaultCenter } = this.props;
    console.log('defaultCenter', defaultCenter);
    return (<GoogleMap
        {...this.props}
        defaultCenter={defaultCenter}
        defaultZoom={12}>

        {this.props.isMarkerShown && <Marker position={{ lat: lat, lng: lng }} />}
      </GoogleMap>);
  }
}

export default withScriptjs(withGoogleMap(GoogleMaps));