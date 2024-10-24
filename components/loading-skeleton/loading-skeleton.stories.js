import LoadingSkeleton from './index';

export default {
    title: 'Components/Loading Skeleton',
    component: LoadingSkeleton,
    parameters: {
        status: {
            type: 'beta',
        },
    },
};

const Template = (args) => <LoadingSkeleton {...args} />;

export const loadingSkeleton = Template.bind({});
loadingSkeleton.args = {};
