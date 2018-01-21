import React, { Component } from 'react';
import { getPhotos } from '../helpers/instagram-api';
import Loading from './Loading';
import Card from './Card';
import DropDown from './DropDown';
import InputSearch from './InputSearch';
import ResultsCount from './ResultsCount';

class PhotoGallery extends Component {
  constructor() {
    super()

    this.state = {
      photos: null,
      count: 0,
      filter: 'all',
      id: 'dropDown'
    };

    this.getPhotosFromApi = this.getPhotosFromApi.bind(this);
  }

  componentDidMount() {
    this.getPhotosFromApi(this.state.filter, this.state.id);
  }

  getPhotosFromApi(filter, id) {
    this.setState({
      photos: null,
      count: 0,
      filter: filter,
      id: id
    });

    getPhotos(filter, id)
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
          <DropDown handleFilter={this.getPhotosFromApi} currentFilter={filter} id={'dropDown'}/>
          <InputSearch handleFilter={this.getPhotosFromApi} id='inputSearch'/>
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
