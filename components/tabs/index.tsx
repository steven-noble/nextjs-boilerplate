import propTypes from "prop-types";

interface Props {
    prop: any;
}

const Tabs = ({ prop }: Props) => {
    console.log(prop)
    return (
        <div className="">Tabs</div>
    );
}

Tabs.propTypes = {
    prop: propTypes.any,
}

export default Tabs