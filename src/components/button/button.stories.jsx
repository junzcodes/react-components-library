// Button.stories.js|jsx

import React from 'react';
import Button from './button';

export default {
  title: 'Button',
  component: Button,
};

export function Primary() {
  return <Button type="primary" label="Primary Button" />;
}
