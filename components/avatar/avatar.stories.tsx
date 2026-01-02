import type { Meta, StoryObj } from '@storybook/nextjs';

import Avatar from './index';

const meta = {
  title: 'Components/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs', 'stable'],
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithImage: Story = {
  args: {
    profile: {
      first_name: 'John',
      last_name: 'Smith',
      avatar_url: 'https://i.pravatar.cc/150?img=12',
      created_at: '2024-01-01',
      updated_at: '2024-01-01',
    },
  },
};

export const WithoutImage: Story = {
  args: {
    profile: {
      first_name: 'Jane',
      last_name: 'Doe',
      avatar_url: '',
      created_at: '2024-01-01',
      updated_at: '2024-01-01',
    },
  },
};

export const FirstNameOnly: Story = {
  args: {
    profile: {
      first_name: 'Alice',
      last_name: undefined,
      avatar_url: 'https://i.pravatar.cc/150?img=5',
      created_at: '2024-01-01',
      updated_at: '2024-01-01',
    },
  },
};

