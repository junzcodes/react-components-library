// Button.stories.js|jsx

import React from 'react';
import Button from './button';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    type: {
      options: ['primary', 'secondary', 'link'],
      control: { type: 'select' },
    },
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});

export const Secondary = Template.bind({});

export const Link = Template.bind({});

Primary.args = {
  label: 'Primary Button',
  type: 'primary',
};

Secondary.args = {
  label: 'Secondary Button',
  type: 'secondary',
};

Link.args = {
  label: 'Link Button',
  type: 'link',
};
