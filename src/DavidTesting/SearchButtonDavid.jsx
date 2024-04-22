// Button to initate the search.
import React from 'react';

function SearchButton({onRequestSearch}) {
    return (
      <button className="searchButton" onClick={() => onRequestSearch()} >
        Search!
      </button>
    );
  }
  
  export default SearchButton;