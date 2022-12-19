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
export const IconCard = Template.bind({});

ContentCard.args = {
  columnClass: 'col-4',
  title: 'Card Title',
  subtitle: 'Card Subtitle',
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
  bgColor: '#ffffff',
  txtColor: '#323232',
  txtAlign: 'left',
};

IconCard.args = {
  columnClass: 'col-4',
  icon: 'https://via.placeholder.com/60',
  title: 'Icon Card Title',
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  bgColor: '#ffffff',
  txtColor: '#323232',
  txtAlign: 'center',
};
