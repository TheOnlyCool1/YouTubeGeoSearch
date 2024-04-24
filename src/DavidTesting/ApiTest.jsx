import React, { useState, useEffect } from 'react';
import '../App.css'
import searchVideos from './YoutubeSearch.js'
import MapEmbed from './MapEmbedDavid';
import Parameters from './ParametersDavid';
import SearchButton from './SearchButtonDavid';
import VideoList from '../VideoList';

const API_KEY = 'AIzaSyAJfS5TdamOO7CSVWzqAJw5xUUT2neRGQg';
function ApiTest() {
  const [clickedPosition, setClickedPosition] = useState(null);
  const [videos, setVideos] = useState([]);
  
  const handleMapClick = (position) => {
    setClickedPosition(position);
  };
  const onRequestSearch = () => {
    const query = document.getElementById('queryInput').value;
    const radius = document.getElementById('radiusInput').value;
    const sortBy = document.getElementById('sortInput').value;
    if (!clickedPosition) {
      alert("Please select a place on the map!")
      return false;
    }
    if (radius == "") {
      alert("Radius must be nonzero!")
      return false;
    }
    searchVideos(query, `${clickedPosition.lat}, ${clickedPosition.lng}`, `${radius}km`, sortBy)
      .then(data => {
        console.log(data);
        const videoItems = data.items.map(item => ({
            id: item.id.videoId,
            title: item.snippet.title,
            thumbnail: item.snippet.thumbnails.default.url,
            description: item.snippet.description,
            channel: item.snippet.channelTitle
        }));
        setVideos(videoItems);
    })
    .catch(error => console.error(error));
  };
  return (
    <div className="App" style={{display: 'flex', flexDirection: 'row'}}>
      <div>
        <h1>YouTube GeoSearch</h1>
        <MapEmbed clickedPosition={clickedPosition} onMapClick={handleMapClick}/>
        <Parameters />
        <SearchButton onRequestSearch={onRequestSearch} />
      </div>
      {/* <pre>{JSON.stringify(videos, null, 2)}</pre> */}
      <div>
        <VideoList videos={videos} />
      </div>
    </div>
  );
}

export default ApiTest;
