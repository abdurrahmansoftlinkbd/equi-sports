import PropTypes from "prop-types";
import Equipment from "./Equipment";

const Equipments = ({ equipments }) => {
  return (
    <div className="grid justify-items-center gap-y-6 mb-24 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {equipments.map((equipment) => (
        <Equipment key={equipment._id} equipment={equipment}></Equipment>
      ))}
    </div>
  );
};

Equipments.propTypes = {
  equipments: PropTypes.array,
};

export default Equipments;
