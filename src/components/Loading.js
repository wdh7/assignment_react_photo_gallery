import React from 'react';
import PropTypes from 'prop-types';

const Loading = ({text}) => {
  return <h3 className='container'>{text}</h3>
};

Loading.defaultProps = {
  text: 'Loading...'
};

Loading.propTypes = {
  text: PropTypes.string.isRequired
};


export default Loading;
