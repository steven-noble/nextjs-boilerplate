import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import Modal from './index'; // Adjust the path if necessary

const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    isOpen: { control: 'boolean' },
    title: { control: 'text' },
    ariaLabel: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<typeof Modal>;

const Template: Story = (args:any) => {
  const [isOpen, setIsOpen] = useState(args.isOpen || false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="bg-blue-500 py-2 px-4 rounded"
      >
        Open Modal
      </button>

      <Modal {...args} isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <p className="text-black">This is the content inside the modal.</p>
        <button
          onClick={() => setIsOpen(false)}
          className="mt-4 bg-red-500 text-white py-2 px-4 rounded"
        >
          Close Modal
        </button>
      </Modal>
    </>
  );
};

export const DefaultModal: Story = Template.bind({});
DefaultModal.args = {
  title: 'Example Modal',
  ariaLabel: 'Example modal for demonstrating the Modal component',
};

export const OpenModal: Story = Template.bind({});
OpenModal.args = {
  title: 'Already Open Modal',
  isOpen: true,
  ariaLabel: 'A modal that starts open',
};
