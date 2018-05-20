import React from "react";
import PropTypes from 'prop-types';
// import { Marker, InfoWindow } from 'react-google-maps';

import GoogleMap from '../googleMap.jsx';
import MapMarker from './map-marker';

export default class MapGenerator extends React.Component {
  static propTypes = {
    center: PropTypes.object.isRequired,
    zoom: PropTypes.number,
    markers: PropTypes.array,
    marker: PropTypes.object
  }

  static defaultProps = {
    zoom: 11,
    markers: [],
    marker: null
  }

  renderMarkers() {
    if (this.props.markers.length) {
      return this.props.markers.map((marker) => {
        return(
          <MapMarker label={marker.label} position={marker.position} title={marker.title} url={marker.url} cityState={marker.cityState} streetAddress={marker.streetAddress} />
        );
      })
    }
  }

  render() {
    return (
      <div>
        <GoogleMap
          defaultZoom={this.props.zoom}
          defaultCenter={this.props.center}
          isMarkerShown
          markers={this.renderMarkers()}
          marker={this.props.marker}
          googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`}
          loadingElement={<div style={{ height: '100%' }} />}
          containerElement={<div style={{ height: '350px' }} />}
          mapElement={<div style={{ height: '90%' }} />}
        />
      </div>
    );
  }
}