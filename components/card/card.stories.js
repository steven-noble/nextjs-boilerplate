import Card from './index';

export default {
    title: 'Components/Card',
    component: Card,
    parameters: {
        status: {
            type: 'beta',
        },
    },
};

const Template = (args) => <Card {...args} />;

export const card = Template.bind({});
card.args = {};
