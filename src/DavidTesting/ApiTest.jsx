import { useState } from 'react'
import '../App.css'

function ApiTest() {
  const [count, setCount] = useState(0)
  const api = window.api;

  return (
    <>
      <script src="https://apis.google.com/js/api.js"></script>
      <script>
      function start() {
        // Initializes the client with the API key and the Translate API.
        gapi.client.init({
          'apiKey': 'AIzaSyAJfS5TdamOO7CSVWzqAJw5xUUT2neRGQg',
          'discoveryDocs': ['https://www.googleapis.com/discovery/v1/apis/translate/v2/rest'],
        }).then(function() {
          // Executes an API request, and returns a Promise.
          // The method name `language.translations.list` comes from the API discovery.
          return gapi.client.language.translations.list({
            q: 'hello world',
            source: 'en',
            target: 'de',
          });
        }).then(function(response) {
          console.log(response.result.data.translations[0].translatedText);
        }, function(reason) {
          console.log('Error: ' + reason.result.error.message);
        })
      };

      // Loads the JavaScript client library and invokes `start` afterwards.
      gapi.load('client', start);
      </script>
      <div id="results"></div>
    </>
  )
}

export default ApiTest
