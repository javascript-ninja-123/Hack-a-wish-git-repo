import React from 'react';
import Geosuggest, { Suggest } from 'react-geosuggest';

export const LocationInput = ({ onSuggestSelect }) => {
  return (<Geosuggest
    placeholder="I wanna help a kid from..."
    location={new google.maps.LatLng(53.558572, 9.9278215)}
    radius={20}
    onSuggestSelect={onSuggestSelect}
  />);
};