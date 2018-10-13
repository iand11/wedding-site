import React from 'react';
import { Marker, InfoWindow } from 'react-google-maps';

import MapGenerator from '../util/map-generator';

import './style/details.scss';

export default class Details extends React.Component {
  renderNoKids() {
    return (
      <div className="details__no-kids">
        <p className="details__no-kids--body">We are having an adults-only reception. The only children attending are those who are part of our wedding party. If anyone needs help with making arrangements for child care, please let us know and we will do our best to assist</p>
      </div>
    );
  }


  render() {
    return (
      <div className="details">
        <MapGenerator
          marker={
            <Marker position={{ lat: 37.0997311, lng: -121.7260854 }}>
              <InfoWindow>
                <div>
                  <p>17155 Uvas Road</p>
                  <p>Morgan Hill, CA</p>
                </div>
              </InfoWindow>
            </Marker>
          }
          center={{ lat: 37.0997311, lng: -121.7260854 }}
        />
        <div className="details__info-section">
          <p className="details__info-section--title">Wedding Ceremony & Reception</p>
          <p className="details__info-section--body">5:30 PM, August 24, 2019</p>
          <p className="details__info-section--body">The Seders Home</p>
          <p className="details__info-section--body">17155 Uvas Road, Morgan Hill, California 95037</p>
        </div>
        <div className="details__no-kids">
          <p className="details__no-kids--body">The ceremony will start promply at 5:30 PM</p>
          <p className="details__no-kids--body">There will not be any parking available </p>
          <p className="details__no-kids--body">We will be providing shuttle service to and from the wedding</p>
          <p className="details__no-kids--body">Please see accomodations for details regarding shuttle service</p>
        </div>
      </div>
    );
  }
}
