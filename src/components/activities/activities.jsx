import React from 'react';

import activities from './activitiesData.json';
import MapGenerator from '../util/map-generator';

import './style/activities.scss';

export default class Activities extends React.Component {
  renderFood(location) {
    return location.food.map((food) => {
      return (
        <div className="activities--section" key={food.title}>
          <div className="activities--title-section">
            <p className="activities--marker">{food.marker}.</p>
            <p className="activities--title">{food.title}</p>
          </div>
          <p className="activities--address">{food.street_address}</p>
          <p className="activities--address">{food.city_state}</p>
          <div className="activities--wrapper-link">
            <a className="activities--link" href={food.url}>Visit Website</a>
          </div>
        </div>
      );
    })
  }

  renderActivities(location) {
    return location.activities.map((activity) => {
      return (
        <div className="activities--section" key={activity.title}>
          <div className="activities--title-section">
            <p className="activities--marker">{activity.marker}.</p>
            <p className="activities--title">{activity.title}</p>
          </div>
          <p className="activities--address">{activity.street_address}</p>
          <p className="activities--address">{activity.city_state}</p>
          <div className="activities--wrapper-link">
            <a className="activities--link" href={activity.url}>Visit Website</a>
          </div>
        </div>
      );
    })
  }

  renderLocations() {
    return activities.locations.map((location) => {
      return (
        <div className="activities" key={location.name}>
        {this.renderMap(location)}
        <p className="activities--location">{location.name}</p>
        <div className="activities--info">
          <div className="activities--activity">
            <p className="activities--label">What To Do</p>
            {this.renderActivities(location)}
          </div>
          <div className="activities--food">
            <p className="activities--label">Where To Eat</p>
            {this.renderFood(location)}
          </div>
        </div>
      </div>
      );
    })
  }

  renderMap(location) {
    const markers = [];

    location.activities.forEach((activity) => {
      markers.push({
        label: activity.marker,
        position: activity.position,
        title: activity.title,
        url: activity.url,
        streetAddress: activity.street_address,
        cityState: activity.city_state
      })
    })

    location.food.forEach((activity) => {
      markers.push({
        label: activity.marker,
        position: activity.position,
        title: activity.title,
        url: activity.url,
        streetAddress: activity.street_address,
        cityState: activity.city_state
      })
    })
    return <MapGenerator
      center={location.center}
      zoom={location.zoom}
      markers={markers}
    />
  }

  render() {
    return (
      <div>
        {this.renderLocations()}
      </div>
    )
  }
}