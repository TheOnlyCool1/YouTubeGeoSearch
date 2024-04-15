// This will have the Google Maps Embed from which the user will get the latitude/longitude coordinates from

function MapEmbed() {
    return (
      <div className="mapContainer">
        <h2>Click on map to specify location center</h2>
        <div className="mapEmbed">
          {/* Map will be embedded here. */}
        </div>
      </div>
    );
  }
  
  export default MapEmbed;