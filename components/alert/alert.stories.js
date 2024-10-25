import Alert from './index';

export default {
    title: 'Components/Alert',
    component: Alert,
    parameters: {
        status: {
            type: 'beta',
        },
    },
};

const Template = (args) => <Alert {...args} />;

export const alertInfo = Template.bind({});
alertInfo.args = {
    message: 'This is an alert!',
    type: 'info'
};

export const alertSuccess = Template.bind({});
alertSuccess.args = {
    message: 'This is an alert!',
    type: 'success'
};

export const alertError = Template.bind({});
alertError.args = {
    message: 'This is an alert!',
    type: 'error'
};

export const alertWarning = Template.bind({});
alertWarning.args = {
    message: 'This is an alert!',
    type: 'warning'
};
