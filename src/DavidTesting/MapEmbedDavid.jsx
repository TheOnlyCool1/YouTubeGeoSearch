// This will have the Google Maps Embed from which the user will get the latitude/longitude coordinates from
import { useState } from 'react';
import { APIProvider, InfoWindow, Map, Marker } from '@vis.gl/react-google-maps';

const MapEmbed = ({ clickedPosition, onMapClick }) => {

  return (
    <div className="mapContainer">
      <h2>Click on map to specify location center!</h2>
      <div className="mapEmbed">
        <APIProvider apiKey="AIzaSyAJfS5TdamOO7CSVWzqAJw5xUUT2neRGQg">
          <Map
            defaultCenter={{ lat: 37.7749, lng: -122.4194 }} 
            defaultZoom={10} 
            onClick={(event) => onMapClick(event.detail.latLng)} 
          >
            {clickedPosition && 
              // <InfoWindow position={clickedPosition}>
              // lat: {clickedPosition.lat}, lng: {clickedPosition.lng}
              // </InfoWindow>
              <Marker position={clickedPosition}/>
            }
          </Map>
        </APIProvider>
      </div>
    </div>
  );
};

export default MapEmbed;