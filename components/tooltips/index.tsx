import propTypes from "prop-types";

interface Props {
    prop: any;
}

const Tooltips = ({ prop }: Props) => {
    console.log(prop)
    return (
        <div className="">Tooltips</div>
    );
}

Tooltips.propTypes = {
    prop: propTypes.any,
}

export default Tooltips