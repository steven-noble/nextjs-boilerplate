import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import Button from './index'; // Assuming your button component file is Button.tsx

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
    variant: {
      control: {
        type: 'select',
        options: ['primary', 'secondary', 'outline'], // Matching the Button component's `variant` prop
      },
    },
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'large'], // Matching the Button component's `size` prop
      },
    },
    disabled: { control: 'boolean' },
  },
  args: { 
    onClick: fn(),
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: 'Primary Button',
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Secondary Button',
    variant: 'secondary',
  },
};

export const Outline: Story = {
  args: {
    label: 'Outline Button',
    variant: 'outline',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    label: 'Large Button',
    variant: 'primary',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    label: 'Small Button',
    variant: 'primary',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Button',
    variant: 'primary',
    disabled: true,
  },
};
