import Search from './index';

export default {
    title: 'Components/Search',
    component: Search,
    parameters: {
        status: {
            type: 'beta',
        },
    },
};

const Template = (args) => <Search {...args} />;

export const search = Template.bind({});
search.args = {};
