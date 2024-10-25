import Breadcrumbs from './index';

export default {
    title: 'Components/Breadcrumbs',
    component: Breadcrumbs,
    parameters: {
        status: {
            type: 'beta',
        },
    },
};

const Template = (args) => <Breadcrumbs {...args} />;

export const breadcrumbs = Template.bind({});
breadcrumbs.args = {
    items: [
        { label: 'Home', href: '/' },
        { label: 'Products', href: '/products' },
        { label: 'Electronics', href: '/products/electronics' },
    ]
};
