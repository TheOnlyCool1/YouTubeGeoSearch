// Component which displays a video result including thumbnail, title, description, owner,
// owner image, & owner subscribers, as well as actually linking to the video.

// Component which displays a video result including thumbnail, title, description, owner,
// owner image, & owner subscribers, as well as actually linking to the video.

import React from 'react';


// https://developers.google.com/youtube/v3/docs/videos

function VideoDisplay({ video }) {
  console.log(video);
    let videoLink = "https://www.youtube.com/watch?v=" + video.id;
    return (
      <div className="videoDisplay">
        <a href={videoLink} target="_blank" rel="noopener noreferrer">
          <img src={video.thumbnail} alt={video.title} href={videoLink} />
        </a>
        <div className="videoDisplayText">
          <a href={videoLink} target="_blank" rel="noopener noreferrer">
            <h3>{video.title}</h3>
          </a>
          {/* <p>{video.viewCount} Views</p> */}
          <p>{video.description}</p>
          <p>Channel: {video.channel}</p>
        </div>
      </div>
    );
  }
  
  export default VideoDisplay;