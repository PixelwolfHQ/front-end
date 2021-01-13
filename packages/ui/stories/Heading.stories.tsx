import React from 'react';
import { Meta } from '@storybook/react';
import Heading from '../src/heading'

const meta: Meta = {
  title: 'Headings',
  component: Heading,
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template = args => (
  <>
    <Heading {...args}>Default heading</Heading>
    <Heading {...args} as="h1">Heading 1</Heading>
    <Heading {...args} as="h2">Heading 2</Heading>
    <Heading {...args} as="h3">Heading 3</Heading>
    <Heading {...args} as="h4">Heading 4</Heading>
    <Heading {...args} as="h5">Heading 5</Heading>
    <Heading {...args} as="h6">Heading 6</Heading>
  </>
);

export const Default = Template.bind({});

Default.args = {};
