import React from 'react';
import PropTypes from 'prop-types';

const ResultsCount = ({count, filter}) => {
  const upperCaseFilter = filter[0].toUpperCase() + filter.slice(1);

  return (
    <div className='count break'>
      <h4>* Showing {count} Results with "{upperCaseFilter}" Filter *</h4>
    </div>
  )
};

ResultsCount.propTypes = {
  count: PropTypes.number.isRequired,
  filter: PropTypes.string.isRequired
};


export default ResultsCount;
