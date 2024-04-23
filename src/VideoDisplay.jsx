// Component which displays a video result including thumbnail, title, description, owner,
// owner image, & owner subscribers, as well as actually linking to the video.

// Component which displays a video result including thumbnail, title, description, owner,
// owner image, & owner subscribers, as well as actually linking to the video.

import React from 'react';


// https://developers.google.com/youtube/v3/docs/videos

function VideoDisplay({ video }) {
    let videoLink = "https://www.youtube.com/watch?v=" + video.id;
    let snippet = video.snippet;
    return (
      <div className="videoDisplay">
        <img src={snippet.thumbnails.default.url} alt={snippet.localized.title} href={videoLink} />
        <h3 href={videoLink}>{snippet.localized.title}</h3>
        <p>{video.statistics.viewCount} Views</p>
        <p>{snippet.localized.description}</p>
        <p>Channel: {snippet.channelTitle}</p>
      </div>
    );
  }
  
  export default VideoDisplay;