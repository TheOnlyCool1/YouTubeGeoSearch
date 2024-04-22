// This will have the keywords search bar and other parameters listed in the design doc
// like time range and preference and stuff. Likely using a library for the dropdowns & search bar


import React, { useState } from 'react';

function Parameters() {
    return (
      <div className="parameters">
        <input id="queryInput" type="text" placeholder="Search Keywords" />
        <input id="radiusInput" type="number" placeholder="Search radius (km)" title="Please enter a valid number followed by 'km' (optional)" />
        <select id="sortInput">
          <option value="relevance">Relevance</option>
          <option value="rating">Rating</option>
          <option value="date">Date</option>
          <option value="viewCount">Views</option>
          <option value="title">Title</option>
          <option value="videoCount ">Video Count</option>
        </select>
      </div>
    );
  }
  
  export default Parameters;