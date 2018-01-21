import React from 'react';
import PropTypes from 'prop-types';

const Button = ({label, action, search, id}) => {
  return (
    <button onClick={action.bind(null, search, id)}>
      {label}
    </button>
  );
};


Button.propTypes = {
  label: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired,
  search: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
};


export default Button;
