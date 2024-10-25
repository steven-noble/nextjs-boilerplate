import propTypes from "prop-types";

interface Props {
    prop: any;
}

const Video = ({ prop }: Props) => {
    console.log(prop)
    return (
        <div className="">Video</div>
    );
}

Video.propTypes = {
    prop: propTypes.any,
}

export default Video