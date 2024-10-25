import type { Meta, StoryObj } from '@storybook/react'
import Heading from './index'

const meta: Meta<typeof Heading> = {
    title: 'Components/Heading',
    component: Heading,
    parameters: {
        status: {
            type: 'beta',
        },
    },
    argTypes: {
        as: {
            options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
            control: { type: 'select' },
        },
    },
}

export default meta
type Story = StoryObj<typeof Heading>

const props = {
    children: 'Heading title',
    as: 'h1',
    highlighted: 'title',
    className: 'string',
    colour: 'string',
    highlightAll: 'string',
    marginBottom: 'string',
    size: 'string',
    truncate: 'string',
    underline: 'string',
}

export const heading: Story = {
    render: () => <Heading {...props} />,
}
