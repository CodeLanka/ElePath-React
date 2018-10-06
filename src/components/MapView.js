import React from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

export const MapView = withGoogleMap((props) =>
    <GoogleMap defaultZoom={8}
        defaultCenter={{ lat: 13.0827, lng: 80.2707 }}>
        {props.isMarkerShown && <Marker position={{ lat: 13.0827, lng: 80.2707 }} />}
    </GoogleMap>
);