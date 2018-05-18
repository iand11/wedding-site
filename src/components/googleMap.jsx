import React from 'react';

import { withScriptjs, withGoogleMap, GoogleMap } from 'react-google-maps';

const GoogleMapComponent = withScriptjs(withGoogleMap((props) =>
  (<GoogleMap
    defaultZoom={props.defaultZoom}
    defaultCenter={props.defaultCenter}
    // mapTypeId="terrain"
  >
    {props.home}
    {props.markers}
    {props.marker}
    {props.marker2}
    {props.marker3}
    {props.marker4}
  </GoogleMap>
  )
));

export default GoogleMapComponent;
