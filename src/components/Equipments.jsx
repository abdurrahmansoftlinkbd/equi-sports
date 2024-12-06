import PropTypes from "prop-types";

const Equipments = ({ equipments }) => {
  return (
    <div>
      <h2>{equipments.length}</h2>
    </div>
  );
};

Equipments.propTypes = {
  equipments: PropTypes.object,
};

export default Equipments;
