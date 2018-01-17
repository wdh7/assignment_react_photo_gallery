import React from 'react';
import PropTypes from 'prop-types';

const Card = ({photo}) => {
  const photoData = {
    img: photo.images.low_resolution.url,
    username: photo.user.username,
    cardPage: photo.link,
    likesCount: photo.likes.count,
    commentsCount: photo.comments.count
  };

  return (
    <div className='card'>
      <a href={photoData.cardPage}><img src={photoData.img} /></a>
      <h4>{photoData.username}</h4>
      <span className='stack'>{photoData.likesCount} Likes</span>
      <span className='stack'>{photoData.commentsCount} Comments</span>
    </div>
  )
};

Card.propTypes = {
  photo: PropTypes.object.isRequired
};


export default Card;
