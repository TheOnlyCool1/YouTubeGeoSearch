// Component which displays a video result including thumbnail, title, description, owner,
// owner image, & owner subscribers, as well as actually linking to the video.

// Component which displays a video result including thumbnail, title, description, owner,
// owner image, & owner subscribers, as well as actually linking to the video.

import React from 'react';


function VideoDisplay({ video }) {
    return (
      <div className="videoDisplay">
        <img src={video.thumbnail} alt={video.title} />
        <h3>{video.title}</h3>
        <p>{video.views} Views</p>
        <p>{video.description}</p>
        <p>Channel: {video.channelName}</p>
      </div>
    );
  }
  
  export default VideoDisplay;