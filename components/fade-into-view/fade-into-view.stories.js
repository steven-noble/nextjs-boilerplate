import FadeIntoView from './index';

export default {
    title: 'Components/Layout/Fade Into View',
    component: FadeIntoView
};

const Template = (args) => <FadeIntoView {...args} />;

export const fadeIntoView = Template.bind();
fadeIntoView.args = {};
