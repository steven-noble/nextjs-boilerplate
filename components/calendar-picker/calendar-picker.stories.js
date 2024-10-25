import CalendarPicker from './index';

export default {
    title: 'Components/Calendar Picker',
    component: CalendarPicker,
    parameters: {
        status: {
            type: 'beta',
        },
    },
};

const Template = (args) => <CalendarPicker {...args} />;

export const calendarPicker = Template.bind({});
calendarPicker.args = {};
