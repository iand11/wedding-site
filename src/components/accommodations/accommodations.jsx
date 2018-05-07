import React from 'react';
import { Marker, InfoWindow } from 'react-google-maps';

import GoogleMap from '../googleMap.jsx';
import accommodations from './accommodationData.json';

import './style/accommodations.scss';

export default class Accommodations extends React.Component {
  renderHotelInfo() {
    return accommodations.hotels.map((hotel) => {
      return (
        <div className="info-section" key={hotel.name}>
          <p className="info-section--title">{hotel.name}</p>
          <p className="info-section--body">{hotel.street_address}</p>
          <p className="info-section--body">{hotel.city_state}</p>
          <div className="info-section--wrapper-link">
            <a className="info-section--link" href={hotel.url}>Visit Website</a>
          </div>
        </div>
      );
    });
  }
  render() {
    return (
      <div>
        <GoogleMap
          isMarkerShown
          home={
            <Marker title="Wedding" position={{ lat: 37.099, lng: -121.723 }}>
              <InfoWindow>
                <div>
                  Wedding
                </div>
              </InfoWindow>
            </Marker>
          }
          marker={
            <Marker label="1" position={{ lat: 37.121, lng: -121.624 }} />
          }
          marker2={
            <Marker label="2" position={{ lat: 37.152, lng: -121.656 }} />
          }
          marker3={
            <Marker label="3" position={{ lat: 37.133, lng: -121.632 }} />
          }
          googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: '100%' }} />}
          containerElement={<div style={{ height: '350px' }} />}
          mapElement={<div style={{ height: '90%' }} />}
        />
        { this.renderHotelInfo() }
      </div>
    );
  }
}
