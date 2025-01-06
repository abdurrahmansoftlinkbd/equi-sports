import PropTypes from "prop-types";
import Equipment from "./Equipment";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import { FaExternalLinkAlt } from "react-icons/fa";

const Equipments = ({ equipments }) => {
  return (
    <Fade triggerOnce={true}>
      <div className="font-poppins grid justify-items-center mb-12 md:gap-x-7 gap-y-7 grid-cols-1 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
        {equipments
          .map((equipment) => (
            <Equipment key={equipment._id} equipment={equipment}></Equipment>
          ))
          .slice(0, 6)}
      </div>
      <div className="text-center mb-24">
        <Link
          to="/allSportsEquipment"
          className="btn btn-md text-white bg-primary border-primary hover:bg-light hover:border-light"
        >
          Show All Sports Equipments <FaExternalLinkAlt />
        </Link>
      </div>
    </Fade>
  );
};

Equipments.propTypes = {
  equipments: PropTypes.array,
};

export default Equipments;
