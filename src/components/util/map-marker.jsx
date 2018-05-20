import React from 'react';
import PropTypes from 'prop-types';
import { Marker, InfoWindow } from 'react-google-maps';

export default class MapMarker extends React.Component {
  static propTypes = {
    label: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    position: PropTypes.object.isRequired,
    streetAddress: PropTypes.string.isRequired,
    cityState: PropTypes.string.isRequired
  }

  state = {
    windowIsOpen: false
  }

  handleClick = () => {
    this.setState({
      windowIsOpen: !this.state.windowIsOpen
    })
  }

  renderMarker() {
    const { label, position, title, url, streetAddress, cityState } = this.props;
    return(
      <Marker label={label} position={position} onClick={this.handleClick} >
        {this.state.windowIsOpen && <InfoWindow onCloseClick={this.handleClick}>
          <div style={{ padding: '10px' }}>
            <h4 style={{ paddingBottom: '3px' }}>{title}</h4>
            <p>{streetAddress}</p>
            <p style={{ paddingBottom: '3px' }}>{cityState}</p>
            <p><a href={url}>{url}</a></p>
            <a href={`https://www.google.com/maps/search/?api=1&query=${title}`}>Get Directions</a>
          </div>
        </InfoWindow>}
      </Marker>
    );
  }

  render() {
    return this.renderMarker()
  }
}