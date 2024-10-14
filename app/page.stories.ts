import type { Meta, StoryObj } from '@storybook/react';

import Home from './page';

const meta = {
  title: 'Pages/Page',
  component: Home,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'light', value: '#ffffff' },
        { name: 'dark', value: '#0a0a0a' }, // Dark background color
      ],
    },
  },
} satisfies Meta<typeof Home>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Homepage: Story = {};
