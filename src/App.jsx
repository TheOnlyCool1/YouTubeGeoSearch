import React from 'react';
import MapEmbed from './MapEmbed';
import Parameters from './Parameters';
import SearchButton from './SearchButton';
import VideoList from './VideoList';
import './App.css'

function App() {
  // Here you would handle the state and methods to interact with the child components
  return (
    <div className="App">
      <h1>YouTube GeoSearch</h1>
      <MapEmbed />
      <Parameters />
      <SearchButton />
      <VideoList />
    </div>
  );
}

export default App;