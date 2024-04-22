// This will have the Google Maps Embed from which the user will get the latitude/longitude coordinates from
import { useState } from 'react';
import { APIProvider, InfoWindow, Map } from '@vis.gl/react-google-maps';

const MapEmbed = () => {
  const [clickedPosition, setClickedPosition] = useState(null); //lat and long vals are stored in clickedPosition

  const handleMapClick = (event) => {
    setClickedPosition(event.detail.latLng);
  };

  return (
    <div className="mapContainer">
      <h2>Click on map to specify location center!</h2>
      <div className="mapEmbed">
        <APIProvider apiKey="AIzaSyAJfS5TdamOO7CSVWzqAJw5xUUT2neRGQg">
          <Map
            defaultCenter={{ lat: 37.7749, lng: -122.4194 }} 
            defaultZoom={10} 
            onClick={handleMapClick} 
          >
            {clickedPosition && 
              <InfoWindow position={clickedPosition}>
              lat: {clickedPosition.lat}, lng: {clickedPosition.lng}
              </InfoWindow>
            }
          </Map>
        </APIProvider>
      </div>
    </div>
  );
};

export default MapEmbed;