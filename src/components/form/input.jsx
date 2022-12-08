import React from 'react';
import PropTypes from 'prop-types';
import './input.scss';

export default function Input(props) {
  const {
    label, id, type, name, defaultVal, placeholder, isChecked, isRequired, isDisabled, suggestions,
  } = props;
  const inputProps = {
    id,
    name,
    type,
    value: defaultVal,
    placeholder,
    checked: isChecked,
    required: isRequired,
    disabled: isDisabled,
    list: `${id}-datalist`,
  };
  const suggestionsList = [];

  if (!suggestions) {
    inputProps.list = null;
  } else {
    suggestions.map((suggestion) => suggestionsList.push(<option aria-label="search suggestions" value={suggestion} />));
  }

  return (
    <fieldset>
      <label htmlFor={id}>
        {label}
        {isRequired ? ' *' : ''}
      </label>
      <input
        {...inputProps}
      />
      {
        suggestions && (
        <datalist aria-label="search suggestions" id={`${id}-datalist`}>
          {suggestionsList}
        </datalist>
        )
      }
    </fieldset>
  );
}

Input.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  defaultVal: PropTypes.string,
  placeholder: PropTypes.string,
  isChecked: PropTypes.bool,
  isRequired: PropTypes.bool,
  isDisabled: PropTypes.bool,
  suggestions: PropTypes.arrayOf(PropTypes.string),
};

Input.defaultProps = {
  label: null,
  id: null,
  type: 'text',
  name: null,
  defaultVal: null,
  placeholder: null,
  isChecked: false,
  isRequired: false,
  isDisabled: false,
  suggestions: null,
};
