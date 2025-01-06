import PropTypes from "prop-types";
import Equipment from "./Equipment";
import { Fade } from "react-awesome-reveal";

const Equipments = ({ equipments }) => {
  return (
    <Fade triggerOnce={true}>
      <div className="grid justify-items-center md:gap-x-7 gap-y-7 mb-24 grid-cols-1 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
        {equipments
          .map((equipment) => (
            <Equipment key={equipment._id} equipment={equipment}></Equipment>
          ))
          .slice(0, 6)}
      </div>
    </Fade>
  );
};

Equipments.propTypes = {
  equipments: PropTypes.array,
};

export default Equipments;
