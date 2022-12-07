import React from 'react';
import { Meta, Story } from '@storybook/react';
import Textarea from '.';
import TextareaType from './type';

export default {
  title: 'Components / Form / Textarea',
  component: Textarea,
  argTypes: {
    props: {
      background: { control: 'color' },
    },
  },
} as Meta;

const Template: Story<TextareaType> = (args) => <Textarea {...args} />;

export const basic = Template.bind({});
basic.args = {
  placeholder: 'Sample Textarea',
};

export const custom = Template.bind({});
custom.args = {
  placeholder: 'Sample Textarea',
  width: '640px',
  height: '640px',
  padding: '4px',
  borderRadius: '4px',
  background: 'white',
  border: 'none',
  color: 'gray',
  fontSize: '12px',
};
