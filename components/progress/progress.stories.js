import Progress from './index';

export default {
    title: 'Components/Progress',
    component: Progress,
    parameters: {
        status: {
            type: 'beta',
        },
    },
};

const Template = (args) => <Progress {...args} />;

export const progress = Template.bind({});
progress.args = {};
