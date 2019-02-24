import React from 'react';

import MapGenerator from '../util/map-generator';
import detailsData from './detailsData.json';

import './style/details.scss';

export default class Details extends React.Component {

  renderEvents = () => {
    return detailsData.events.map((event) => {
      return (
        <div>
          <div className="details__info-section">
            <p className="details__info-section--title">{event.title}</p>
            <p className="details__info-section--body">{event.date_time}</p>
            <p className="details__info-section--body">{event.location}</p>
            <p className="details__info-section--body">{`${event.street_address}, ${event.city_state}`}</p>
            <p className="details__info-section--kids">{event.kids}</p>
          </div>
        </div>
      )
    })
  }

  render() {
    const markers = detailsData.events.map((event) => {
      return ({
        label: event.label,
        position: event.position,
        title: event.title,
        url: null,
        streetAddress: event.street_address,
        cityState: event.city_state,
        windowIsOpen: event.window,
        search: event.search
      })
    })
    return (
      <div className="details">
        <MapGenerator
          markers={markers}
          center={{ lat: 37.0997311, lng: -121.7260854 }}
          zoom={10}
        />
        {this.renderEvents()}
      </div>
    );
  }
}
