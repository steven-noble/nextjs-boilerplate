import propTypes from "prop-types";

interface Props {
    prop: any;
}

const Pagination = ({ prop }: Props) => {
    console.log(prop)
    return (
        <div className="">Pagination</div>
    );
}

Pagination.propTypes = {
    prop: propTypes.any,
}

export default Pagination