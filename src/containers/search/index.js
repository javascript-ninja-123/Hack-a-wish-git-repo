import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

// -- Components
import SearchForm from 'components/search/search-form';
import SearchResults from 'components/search/search-results';
import GoogleMaps from 'components/maps';


class Search extends Component {
  state = {
    mapLocation: { lat: -34.397, lng: 150.644 }
  }

  componentDidMount() {
    // read url search params
  }

  onSuggestSelect = (suggestion) => {
    //console.log('onSuggestSelect', suggestion);

    //const {
    //  location
    //} = suggestion;

    //this.setState({
    //  mapLocation: location
    //});
  }

  render() {
    const { mapLocation } = this.state; //Removing maps for now

    return (<Fragment>
      <SearchForm />
      {/*<GoogleMaps
        isMarkerShown
        defaultCenter={mapLocation}
        lat={mapLocation.lat}
        lng={mapLocation.lng}
        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyAEO-6jZwvZMxRmCNQe8oeNCi8sfgb-N30"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `400px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />*/}
      <SearchResults />
    </Fragment>);
  }
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
});



export default Search;