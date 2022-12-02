import React from 'react';
import PropTypes from 'prop-types';

export default function Button(props) {
  const { label, type } = props;
  return (
    <button type="button" className={`button ${type}`}>
      {label}
    </button>
  );
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
};

Button.defaultProps = {
  type: '',
};
