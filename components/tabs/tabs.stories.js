import Tabs from './index';

export default {
    title: 'Components/Tabs',
    component: Tabs,
    parameters: {
        status: {
            type: 'beta',
        },
    },
};

const Template = (args) => <Tabs {...args} />;

export const tabs = Template.bind({});
tabs.args = {};
