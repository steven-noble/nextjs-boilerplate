import BackToTop from './index';

export default {
    title: 'Components/Back To Top',
    component: BackToTop,
    parameters: {
        status: {
            type: 'beta',
        },
    },
};

const Template = (args) => <div className="h-[2000px]">
    <h1>Scroll down</h1>
    <BackToTop {...args} />
</div>;

export const backToTop = Template.bind({});
backToTop.args = {};
