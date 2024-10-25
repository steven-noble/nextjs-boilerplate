import Tooltips from './index';

export default {
    title: 'Components/Tooltips',
    component: Tooltips,
    parameters: {
        status: {
            type: 'beta',
        },
    },
};

const Template = (args) => <Tooltips {...args} />;

export const tooltips = Template.bind({});
tooltips.args = {};
