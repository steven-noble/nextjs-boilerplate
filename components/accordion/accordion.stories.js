import Accordion from './index';

export default {
    title: 'Components/Accordion',
    component: Accordion,
    parameters: {
        status: {
            type: 'beta',
        },
    },
};

const Template = (args) => <Accordion {...args} />;

export const accordion = Template.bind({});
accordion.args = {
    items: [
        { id: 'item1', title: 'Accordion Item 1', content: 'Content for item 1.' },
        { id: 'item2', title: 'Accordion Item 2', content: 'Content for item 2.' },
        { id: 'item3', title: 'Accordion Item 3', content: 'Content for item 3.' },
    ]
};
