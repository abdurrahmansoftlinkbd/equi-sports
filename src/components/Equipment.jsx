import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Equipment = ({ equipment }) => {
  const { _id, itemName, photoUrl, description, price, stockStatus } =
    equipment;

  return (
    <div className="card font-poppins w-full lg:w-48 bg-base-100 shadow-xl border border-gray-200 hover:shadow-2xl">
      <figure className="overflow-hidden">
        <img
          src={photoUrl}
          alt={itemName}
          className="h-36 w-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </figure>
      <div className="card-body p-4">
        <h2 className="card-title text-lg font-bold text-primary">
          {itemName}
        </h2>
        <p title={description} className="text-sm font-roboto">
          {description.slice(0, 40)}...
        </p>
        <div className="flex justify-between items-center text-sm">
          <span className=" font-semibold text-primary">${price}</span>
          <span
            className={`font-semibold ${
              stockStatus > 0 ? "text-green-500" : "text-red-500"
            }`}
          >
            {stockStatus > 0 ? "In Stock" : "Out of Stock"}
          </span>
        </div>
        <div className="card-actions mt-1">
          <Link
            to={`/equipments/${_id}`}
            className="btn btn-xs bg-primary border-primary text-white hover:bg-light hover:border-light"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

Equipment.propTypes = {
  equipment: PropTypes.object,
};

export default Equipment;
