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
        <img src={video.thumbnail} alt={video.title} href={videoLink} />
        <h3 href={videoLink}>{video.title}</h3>
        {/* <p>{video.viewCount} Views</p> */}
        <p>{video.description}</p>
        <p>Channel: {video.channel}</p>
      </div>
    );
  }
  
  export default VideoDisplay;