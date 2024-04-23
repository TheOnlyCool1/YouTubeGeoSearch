// Scroll area which will contain the list of videos after the search.

import React from 'react';
import VideoDisplay from './VideoDisplay';



function VideoList() {
    // Simulating video data
    const videos = [
      // Populate with video data objects
    ];
  
    return (
      <div className="videoList">
        {videos.map(video => (
          <VideoDisplay key={video.id} video={video} />
        ))}
      </div>
    );
  }
  
  export default VideoList;
