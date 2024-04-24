// Scroll area which will contain the list of videos after the search.

import React from 'react';
import VideoDisplay from './VideoDisplay';



function VideoList({videos}) {
    // Simulating video data
    // const videos = [
    //   // Populate with video data objects
    // ];
  
    return (
      <div className="videoList">
        <ul>
          {videos.map(video => (
            <li>
              <VideoDisplay key={video.id} video={video} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default VideoList;
