// Button.stories.js|jsx

import React from 'react';
import Card from './card';

export default {
  title: 'Card',
  component: Card,
  argTypes: {
    type: {
      options: ['primary', 'secondary', 'link'],
      control: { type: 'select' },
    },
  },
};

const Template = (args) => <Card {...args} />;

export const ContentCard = Template.bind({});

ContentCard.args = {
  columnClass: 'col-4',
  title: 'Card Title',
  subtitle: 'Card Subtitle',
  description: 'Card Description',
  bgColor: '#ffffff',
  txtColor: '#323232',
  txtAlign: 'center',
};
