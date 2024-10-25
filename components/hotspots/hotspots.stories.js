import Hotspots from './index';

export default {
    title: 'Components/Hotspots',
    component: Hotspots,
    parameters: {
        status: {
            type: 'beta',
        },
    },
};

const Template = (args) => <Hotspots {...args} />;

export const hotspots = Template.bind({});
hotspots.args = {
    imageSrc: "https://placehold.co/600x400/EEE/31343C",
    hotspots: [
        { id: 'hotspot1', x: 20, y: 30, label: 'Hotspot 1' },
        { id: 'hotspot2', x: 50, y: 50, label: 'Hotspot 2' },
        { id: 'hotspot3', x: 80, y: 20, label: 'Hotspot 3' },
    ]
};
