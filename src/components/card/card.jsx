import React from 'react';
import PropTypes from 'prop-types';
import './card.scss';

export default function Card(props) {
  const {
    columnClass, title, subtitle, description, bgColor, txtColor, txtAlign,
  } = props;

  return (
    <div className={`card ${columnClass}`} style={{ backgroundColor: bgColor, color: txtColor, textAlign: txtAlign }}>
      <div className="card-header">
        { title && (
        <div className="card-header-title">
          { title }
        </div>
        )}
        {subtitle && (
        <h4 className="card-subtitle">
          {subtitle}
        </h4>
        )}
      </div>
      {description && (
        <div className="card-body">
          {description}
        </div>
      )}
    </div>
  );
}

Card.propTypes = {
  columnClass: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  description: PropTypes.string,
  bgColor: PropTypes.string,
  txtColor: PropTypes.string,
  txtAlign: PropTypes.string,
};

Card.defaultProps = {
  columnClass: '',
  title: '',
  subtitle: '',
  description: '',
  bgColor: '#ffffff',
  txtColor: '#323232',
  txtAlign: 'left',
};
