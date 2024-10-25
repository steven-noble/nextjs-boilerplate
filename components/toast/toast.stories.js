import Toast from './index';

export default {
    title: 'Components/Toast',
    component: Toast,
    parameters: {
        status: {
            type: 'beta',
        },
    },
};

const Template = (args) => <Toast {...args} />;

export const toastSuccess = Template.bind({});
toastSuccess.args = {
    message: 'Toast Success',
    type: 'success'
};

export const toastError = Template.bind({});
toastError.args = {
    message: 'Toast Error',
    type: 'error'
};

export const toastInfo = Template.bind({});
toastInfo.args = {
    message: 'Toast Info',
    type: 'info'
};
