import React from 'react';
import Alert from './alert';

export default {
  title: 'Alert',
  component: Alert,
  argTypes: {
    type: {
      options: ['info', 'warning'],
      control: { type: 'select' },
    },
  },
};

const Template = (args) => <Alert {...args} />;

export const InfoAlert = Template.bind({});
export const WarningAlert = Template.bind({});

InfoAlert.args = {
  type: 'info',
  children: '<h3>This is a info alert</h3><p>This alert can be dismissed./p>',
};

WarningAlert.args = {
  type: 'warning',
  children: '<h3>This is a warning alert</h3><p>This alert cannot be dismissed.</p>',
  isDismissable: false,
};
