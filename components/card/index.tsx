import propTypes from "prop-types";

interface Props {
    prop: any;
}

const Card = ({ prop }: Props) => {
    console.log(prop)
    return (
        <div className="">Card</div>
    );
}

Card.propTypes = {
    prop: propTypes.any,
}

export default Card