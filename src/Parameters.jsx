// This will have the keywords search bar and other parameters listed in the design doc
// like time range and preference and stuff. Likely using a library for the dropdowns & search bar


import React, { useState } from 'react';

function Parameters() {
    return (
      <div className="parameters">
        <input type="text" placeholder="Search Keywords" />
        <input type="number" min={1} placeholder="Search radius (km)" title="Please enter a valid number followed by 'km' (optional)" />
        <select>
          <option value="views">Views</option>
          {/* Add other options as needed */}
        </select>
      </div>
    );
  }
  
  export default Parameters;