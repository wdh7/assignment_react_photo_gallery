import React, { Component } from 'react';
import Header from './Header';
import PhotoGallery from './PhotoGallery';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <PhotoGallery />
      </div>
    );
  }
}

export default App;
