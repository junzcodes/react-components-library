import React from 'react';
import PropTypes from 'prop-types';
import './card.scss';

export default function Card(props) {
  const {
    columnClass, icon, title, subtitle, description, bgColor, txtColor, txtAlign,
  } = props;

  return (
    <div className={`card ${columnClass}`} style={{ backgroundColor: bgColor, color: txtColor, textAlign: txtAlign }}>
      { icon && (
      <div className="card-icon">
        <img src={icon} alt={title} />
      </div>
      )}
      <div className="card-header">
        { title && (
        <h3>{title}</h3>
        )}
        {subtitle && (
        <h4>{subtitle}</h4>
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
  icon: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  description: PropTypes.string,
  bgColor: PropTypes.string,
  txtColor: PropTypes.string,
  txtAlign: PropTypes.string,
};

Card.defaultProps = {
  columnClass: '',
  icon: '',
  title: '',
  subtitle: '',
  description: '',
  bgColor: '#ffffff',
  txtColor: '#323232',
  txtAlign: 'left',
};
