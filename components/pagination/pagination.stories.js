import Pagination from './index';

export default {
    title: 'Components/Pagination',
    component: Pagination,
    parameters: {
        status: {
            type: 'beta',
        },
    },
};

const Template = (args) => <Pagination {...args} />;

export const pagination = Template.bind({});
pagination.args = {};
