import React from 'react';
import { Marker, InfoWindow } from 'react-google-maps';

import MapGenerator from '../util/map-generator';

import './style/details.scss';

export default class Details extends React.Component {
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
          <p className="details__info-section--body">5:00 PM, August 24, 2019</p>
          <p className="details__info-section--body">The House on The Hill</p>
          <p className="details__info-section--body">17155 Uvas Road, Morgan Hill, California 95037</p>
        </div>

        <div className="details__no-kids">
          <p className="details__no-kids--body">We are having an adults-only reception. The only children attending are those who are part of our wedding party. If anyone needs help with making arrangements for child care, please let us know and we will do our best to assist</p>
        </div>
      </div>
    );
  }
}
