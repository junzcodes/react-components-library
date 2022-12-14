import React, { useState } from 'react';
import PropTypes from 'prop-types';
import parse from 'html-react-parser';
import { X } from 'react-feather';
import './alert.scss';

export default function Alert(props) {
  const { type, isDismissable, children } = props;
  const [showAlert, setShowAlert] = useState(true);

  if (showAlert) {
    return (
      <div className={`alert ${type}`}>
        {isDismissable && (
        <button className="close" type="button" aria-label="Close" onClick={() => { setShowAlert(!showAlert); }}>
          <X size="24" />
        </button>
        )}
        {parse(children)}
      </div>
    );
  }
}

Alert.propTypes = {
  type: PropTypes.string.isRequired,
  isDismissable: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

Alert.defaultProps = {
  isDismissable: true,
};
