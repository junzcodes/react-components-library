// Button.stories.js|jsx

import React from 'react';
import SelectDropdown from './selectdropdown';

export default {
  title: 'Select Dropdown',
  component: SelectDropdown,
};

const Template = (args) => <SelectDropdown {...args} />;

export const Primary = Template.bind({});
export const Secondary = Template.bind({});

Primary.args = {
  defaultValue: 'Option 1',
  options: ['option 2', 'option 3', 'option 4', 'option 5'],
  type: 'primary',
};

Secondary.args = {
  defaultValue: 'Option 1',
  options: ['option 2', 'option 3', 'option 4', 'option 5'],
  type: 'secondary',
};
