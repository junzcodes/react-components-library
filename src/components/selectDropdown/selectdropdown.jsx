import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ChevronDown, ChevronUp } from 'react-feather';
import './selectdropdown.scss';

export default function SelectDropdown(props) {
  const { defaultValue, options, type } = props;
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedValue, setSelectedValue] = useState(defaultValue);
  const optionsList = options.map((option) => <li key={option} data-value={option}>{option}</li>);

  function handleSelect(value) {
    setSelectedValue(value);
    setShowDropdown(!showDropdown);
  }

  return (
    <div className={`dropdown ${type}`}>
      <button aria-label={selectedValue} type="button" value={selectedValue} className={`dropdown-toggle button ${type}`} onClick={() => { setShowDropdown(!showDropdown); }}>
        {selectedValue}
        {showDropdown ? <ChevronUp size="24" /> : <ChevronDown size="24" />}
      </button>
      {showDropdown
      && (
      <ul role="presentation" className="dropdown-options" onClick={(e) => handleSelect(e.target.dataset.value)}>
        {optionsList}
      </ul>
      )}
    </div>
  );
}

SelectDropdown.propTypes = {
  defaultValue: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  type: PropTypes.string.isRequired,
};
