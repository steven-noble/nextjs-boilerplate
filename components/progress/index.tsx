import propTypes from "prop-types";

interface Props {
    prop: any;
}

const Progress = ({ prop }: Props) => {
    console.log(prop)
    return (
        <div className="">Progress</div>
    );
}

Progress.propTypes = {
    prop: propTypes.any,
}

export default Progress