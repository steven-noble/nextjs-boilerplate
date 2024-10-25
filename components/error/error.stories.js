import Error from './index';

export default {
    title: 'Components/Error',
    component: Error,
    parameters: {
        status: {
            type: 'beta',
        },
    },
};

const Template = (args) => <Error {...args} />;

export const error = Template.bind({});
error.args = {};
