import type { Meta, StoryObj } from '@storybook/nextjs';

import RoleSwitcher from './index';

const meta = {
  title: 'Components/RoleSwitcher',
  component: RoleSwitcher,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs', 'experimental'],
} satisfies Meta<typeof RoleSwitcher>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onRoleChange: () => console.log('Role changed'),
  },
};

