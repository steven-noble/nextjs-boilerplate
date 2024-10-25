import propTypes from "prop-types";

interface Props {
    prop: any;
}

const CalendarPicker = ({ prop }: Props) => {
    console.log(prop)
    return (
        <div className="">CalendarPicker</div>
    );
}

CalendarPicker.propTypes = {
    prop: propTypes.any,
}

export default CalendarPicker