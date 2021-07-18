import React from "react";
import GoogleMapReact from 'google-map-react';
import "../Css/Map.css"

const AnyReactComponent = ({ text }) => <div className="MarkerMap"><div className="MarkerMap-Child">{text}</div></div>;

export default function Map(){
  const defaultProps = {
    center: {
      lat: 19.0354715,
      lng: -98.2645563
    },
    zoom: 20
  };

  return (
    // Important! Always set the container height explicitly
    <div className="Container-Contact-Child-Map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyBZwgzaqo730JoDh7TnplUH93ICklWwImw" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={19.0354715}
          lng={-98.2645563}
          text="SC"
        />
      </GoogleMapReact>
    </div>
  );
}