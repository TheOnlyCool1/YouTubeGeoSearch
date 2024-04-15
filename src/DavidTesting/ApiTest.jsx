import React, { useState, useEffect } from 'react';
import '../App.css'
import searchVideos from './YoutubeSearch.js'

const API_KEY = 'AIzaSyAJfS5TdamOO7CSVWzqAJw5xUUT2neRGQg';
function ApiTest() {
    const [videos, setVideos] = useState([]);
    useEffect(() => {
      const query = 'clam chowder';
      

      // Call the searchVideos function from the external script
      searchVideos(query, "37.795163718678964, -122.41781593138869", '25km', 'date')
          .then(data => {
              // Extract the list of videos from the response data
              const videoItems = data.items.map(item => ({
                  id: item.id.videoId,
                  title: item.snippet.title,
                  thumbnail: item.snippet.thumbnails.default.url
              }));
              setVideos(videoItems);
          })
          .catch(error => console.error(error));
  }, []);
    return (
        <div>
          <h1>Youtube Videos: cats :)</h1>
          <pre>{JSON.stringify(videos, null, 2)}</pre>
        </div>
      );
    };

export default ApiTest
