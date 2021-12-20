import React from 'react';
import { ComponentMeta } from '@storybook/react'

import Button from './Button';

export default {
  title: 'components/Button',
  component: Button
} as ComponentMeta<typeof Button>

export const button = (args: any) => {
  return (
    <Button label='Button' {...args}/>
  )
}

button.args = {
  variant: 'contained',
}