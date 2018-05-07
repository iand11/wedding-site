import React from 'react';

import { withScriptjs, withGoogleMap, GoogleMap } from 'react-google-maps';

const GoogleMapComponent = withScriptjs(withGoogleMap((props) =>
  (<GoogleMap
    defaultZoom={11}
    defaultCenter={{ lat: 37.0997311, lng: -121.7260854 }}
    // mapTypeId="terrain"
  >
    {props.home}
    {props.marker}
    {props.marker2}
    {props.marker3}
  </GoogleMap>
  )
));

export default GoogleMapComponent;
