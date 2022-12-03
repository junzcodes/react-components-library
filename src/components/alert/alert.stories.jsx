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
export const CriticalAlert = Template.bind({});

InfoAlert.args = {
  type: 'info',
  children: '<p>This information alert can be dismissed.</p>',
};

WarningAlert.args = {
  type: 'warning',
  children: '<p>This warning alert can be dismissed.</p>',
  isDismissable: true,
};

CriticalAlert.args = {
  type: 'error',
  children: '<p>This critical alert cannot be dismissed.</p>',
  isDismissable: false,
};
