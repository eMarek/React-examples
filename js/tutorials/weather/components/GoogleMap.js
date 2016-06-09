import React from 'react';
import { GoogleMapLoader, GoogleMap } from 'react-google-maps';

const GOOGLE_MAPS_API_KEY = 'AIzaSyBai*****************YVYvdieKoDl0sg';

(() => {
    var script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}`;
    document.body.appendChild(script);
})();

export default (props) => {
    return (
        <GoogleMapLoader
            containerElement={ <div style={{height: '100%'}} /> }
            googleMapElement={
                <GoogleMap
                    defaultZoom={12}
                    defaultCenter={{
                        lat: props.lat,
                        lng: props.lon
                    }}
                />
            }
        />
    );
}