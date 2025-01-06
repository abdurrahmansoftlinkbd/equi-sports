import PropTypes from "prop-types";
import Equipment from "./Equipment";
import { Fade } from "react-awesome-reveal";

const Equipments = ({ equipments }) => {
  return (
    <Fade triggerOnce={true}>
      <div className="grid justify-items-center md:gap-x-7 gap-y-7 mb-24 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-5">
        {equipments.map((equipment) => (
          <Equipment key={equipment._id} equipment={equipment}></Equipment>
        ))}
      </div>
    </Fade>
  );
};

Equipments.propTypes = {
  equipments: PropTypes.array,
};

export default Equipments;
