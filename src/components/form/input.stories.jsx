// Button.stories.js|jsx

import React from 'react';
import Input from './input';

export default {
  title: 'Inputs',
  component: Input,
};

const Template = (args) => <Input {...args} />;
const suggestionsJSON = ['Apple', 'Orange', 'Annanas', 'Peach', 'Papaya'];

export const TextInput = Template.bind({});
export const PasswordInput = Template.bind({});
export const EmailInput = Template.bind({});
export const SearchInputWithDatalist = Template.bind({});

TextInput.args = {
  label: 'Text Input',
  id: 'input_t',
  name: 'Input.t',
  type: 'text',
  placeholder: 'Enter username',
  isRequired: true,
};

PasswordInput.args = {
  label: 'Password Input',
  id: 'input_p',
  name: 'Input.p',
  type: 'password',
  placeholder: 'Enter password',
  isRequired: true,
};

EmailInput.args = {
  label: 'Email Input',
  id: 'input_e',
  name: 'Input.e',
  type: 'email',
  placeholder: 'Enter email',
  isRequired: true,
};

SearchInputWithDatalist.args = {
  label: 'Email Input',
  id: 'input_s',
  name: 'Input.s',
  type: 'search',
  placeholder: 'Search for fruits',
  suggestions: suggestionsJSON,
};
