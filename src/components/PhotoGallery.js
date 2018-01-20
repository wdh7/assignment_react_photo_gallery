import React, { Component } from 'react';
import { getPhotos } from '../helpers/instagram-api';
import Loading from './Loading';
import Card from './Card';
import Filter from './Filter';
import ResultsCount from './ResultsCount';

class PhotoGallery extends Component {
  constructor() {
    super()

    this.state = {
      photos: null,
      count: 0,
      filter: 'all'
    };

    this.getPhotosFromApi = this.getPhotosFromApi.bind(this);
  }

  componentDidMount() {
    this.getPhotosFromApi(this.state.filter);
  }

  getPhotosFromApi(filter) {
    this.setState({
      photos: null,
      count: null,
      filter: filter
    });

    getPhotos(filter)
      .then(photos => {
        this.setState({
          photos,
          count: photos.length
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    const { photos, count, filter } = this.state;

    if (!photos) {
      return <Loading text='Just a few moments...' />;
    }

    if (photos) {
      return (
        <div className='gallery container'>
          <ResultsCount count={count} filter={filter} />
          <Filter handleFilter={this.getPhotosFromApi} currentFilter={filter} />
          <h3 className='break'>Feed: </h3>
          <ul className='photos-wrapper'>
            { photos.map(photo => <Card photo={photo} />) }
          </ul>
        </div>
      )
    }
  }
}


export default PhotoGallery;
