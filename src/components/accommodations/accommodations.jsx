import React from 'react';
import { Marker, InfoWindow } from 'react-google-maps';

import accommodations from './accommodationData.json';
import MapGenerator from '../util/map-generator';

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
    const markers = accommodations.hotels.map((hotel) => {
      return { label: hotel.marker, position: hotel.position}
    });

    return (
      <div>
        <MapGenerator
          center={{ lat: 37.0997311, lng: -121.7260854 }}
          zoom={11}
          markers={markers}
          marker={
            <Marker title="Wedding" position={{ lat: 37.099, lng: -121.723 }}>
              <InfoWindow>
                <div>
                  Wedding
                </div>
              </InfoWindow>
            </Marker>
          }
        />
        { this.renderHotelInfo() }
      </div>
    );
  }
}
