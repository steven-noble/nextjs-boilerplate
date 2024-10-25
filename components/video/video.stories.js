import Video from './index';

export default {
    title: 'Components/Video',
    component: Video,
    parameters: {
        status: {
            type: 'beta',
        },
    },
};

const Template = (args) => <Video {...args} />;

export const video = Template.bind({});
video.args = {};
