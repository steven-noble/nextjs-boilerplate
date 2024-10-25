import propTypes from "prop-types";

interface Props {
    prop: any;
}

const Error = ({ prop }: Props) => {
    console.log(prop)
    return (
        <div className="">Error</div>
    );
}

Error.propTypes = {
    prop: propTypes.any,
}

export default Error