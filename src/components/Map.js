import React from 'react';
import ReactGoogleMapLoader from 'react-google-maps-loader';
import ReactGoogleMap from 'react-google-map';

const Map = (props) => {
  return(
    <ReactGoogleMapLoader
      params={{
        key: process.env.REACT_APP_GOOGLE_MAP_API_KEY,
      }}
      style={{height: "100%"}}
      render={googleMaps => {
        return (
          googleMaps && (
            <ReactGoogleMap
              googleMaps={googleMaps}
              coordinates={[
                {
                  title: "",
                  position: props.position
                },
              ]}
              center={props.position}
              zoom={11}
            />
          )
        )
      }}
    />
  );
}

export default Map;