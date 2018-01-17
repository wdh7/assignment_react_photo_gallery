import React, { Component } from 'react';
import { getPhotos } from '../helpers/instagram-api';
import Loading from './Loading';
import Card from './Card';

class PhotoGallery extends Component {
  constructor() {
    super()

    this.state = {
      photos: null
    };
  }

  componentDidMount() {
    getPhotos()
      .then(photos => {
        this.setState({photos});
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    const { photos } = this.state;

    if (!photos) {
      return <Loading text='Just a few moments...' />;
    }

    if (photos) {
      return (
        <div className='gallery container'>
          <h3 className='break'>Feed:</h3>
          <ul className='photos-wrapper'>
            { photos.map(photo => <Card photo={photo} />) }
          </ul>
        </div>
      )
    }
  }
}


export default PhotoGallery;
