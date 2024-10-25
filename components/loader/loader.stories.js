import Loader from './index';

export default {
    title: 'Components/Loader',
    component: Loader,
    parameters: {
        status: {
            type: 'beta',
        },
    },
};

const Template = (args) => <Loader {...args} />;

export const loaderSmall = Template.bind({});
loaderSmall.args = {
    progress: 75,
    size: 'small'
};

export const loaderMedium = Template.bind({});
loaderMedium.args = {
    progress: 75,
    size: 'medium'
};

export const loaderLarge = Template.bind({});
loaderLarge.args = {
    progress: 75,
    size: 'large'
};
