import React from 'react';
import PropTypes from 'prop-types';

const Hashtags = ({hashtags, photoId}) => {
  return (
    <ul className='hashes'>
      {hashtags.map(hashtag => <span className='hashtag'>#{hashtag}</span>)}
    </ul>
  )
};

Hashtags.propTypes = {
  hashtags: PropTypes.array.isRequired
};


const Card = ({photo}) => {
  const photoData = {
    img: photo.images.low_resolution.url,
    username: photo.user.username,
    cardPage: photo.link,
    likesCount: photo.likes.count,
    commentsCount: photo.comments.count,
    filter: photo.filter,
    tags: photo.tags,
  };

  return (
    <div className='card' key={photo.user.id}>
      <a href={photoData.cardPage}><img src={photoData.img} /></a>
      <h4>{photoData.username}</h4>
      <span className='stack'>{photoData.likesCount} Likes</span>
      <span className='stack'>{photoData.commentsCount} Comments</span>
      <span className='stack'>{photoData.filter} Filter</span>
      <Hashtags hashtags={photoData.tags} />
    </div>
  )
};

Card.propTypes = {
  photo: PropTypes.object.isRequired
};


export default Card;
