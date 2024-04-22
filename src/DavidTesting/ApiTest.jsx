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
    const radius = document.getElementById('radiusInput').value + "km";
    const sortBy = document.getElementById('sortInput').value;
    searchVideos(query, `${clickedPosition.lat}, ${clickedPosition.lng}`, `${radius}`, sortBy)
           .then(data => {
              const videoItems = data.items.map(item => ({
                  id: item.id.videoId,
                  title: item.snippet.title,
                  thumbnail: item.snippet.thumbnails.default.url
              }));
              setVideos(videoItems);
          })
          .catch(error => console.error(error));
  };
  return (
    <div className="App">
      <h1>YouTube GeoSearch</h1>
      <MapEmbed clickedPosition={clickedPosition} onMapClick={handleMapClick}/>
      <Parameters />
      <SearchButton onRequestSearch={onRequestSearch} />
      <VideoList />
      <pre>{JSON.stringify(videos, null, 2)}</pre>
    </div>
  );
}

export default ApiTest;
