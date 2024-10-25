import propTypes from "prop-types";

interface Props {
    prop: any;
}

const Search = ({ prop }: Props) => {
    console.log(prop)
    return (
        <div className="">Search</div>
    );
}

Search.propTypes = {
    prop: propTypes.any,
}

export default Search