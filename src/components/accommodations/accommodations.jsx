import React from 'react';

import MapGenerator from '../util/map-generator';
import MapMarker from '../util/map-marker';

import hotel from './accommodationData.json';

import './style/accommodations.scss';

export default class Accommodations extends React.Component {
  renderHotelInfo() {
      return (
        <div className="info-section">
          <div style={{ marginBottom: '45px'}}>
            <p className="info-section--title">{hotel.name}</p>
            <p className="info-section--body">{hotel.street_address}</p>
            <p className="info-section--body">{hotel.city_state}</p>
            <div className="info-section--wrapper-link">
              <a className="info-section--link" href="tel:1-888-236-2424">1-888-236-2424</a>
            </div>
            <div className="info-section--wrapper-link">
              <a className="info-section--link" href={hotel.url}>Visit Website</a>
            </div>
          </div>
          <div className="info-section__details">
            <p className="info-section__details--body">Block Name: The Seders Wedding Block</p>
            <p className="info-section__details--body">Please book your reservation by July 23rd 2019</p>
            <p className="info-section__details--body">Block rates can not be guaranteed after that date</p>
          </div>
          <div className="info-section__details-no-border">
            <p className="info-section__details--body">We will be providing a shuttle to and from the Seders home</p>
            <p className="info-section__details--body">Parking at the Seders' is extremely limited</p>
            <p className="info-section__details--body">Please let us know if you won't be able to take the shuttle and will be driving</p>
          </div>
          <div className="info-section__details-no-border">
            <p className="info-section__details--body">Shuttle pick up and drop off will be at the AC Hotel by Marriott San Jose Downtown</p>
            <p className="info-section__details--body">Pick up time is 4pm sharp</p>
          </div>
        </div>
      );
  }

  renderMap() {
    return (
      <div>
        <MapGenerator
          center={{ lat: 37.333150, lng: -121.896110 }}
          zoom={11}
          marker={
            <MapMarker
              position={hotel.position}
              title={hotel.name}
              cityState={hotel.city_state}
              streetAddress={hotel.street_address}
              windowIsOpen={true}
              search={hotel.name}
            />
          }
        />
        { this.renderHotelInfo() }
      </div>
    );
  }
  render() {
    return (
     <div>
      {this.renderMap()}
     </div>
    );
  }
}
