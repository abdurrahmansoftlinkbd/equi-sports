import PropTypes from "prop-types";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

const Equipment = ({ equipment }) => {
  const {
    _id,
    itemName,
    photoUrl,
    categoryName,
    description,
    price,
    rating,
    customization,
    stockStatus,
  } = equipment;

  return (
    <div className="card w-full lg:w-80 xl:w-96 bg-base-100 shadow-xl border border-gray-200 hover:shadow-2xl">
      <figure className="overflow-hidden">
        <img
          src={photoUrl}
          alt={itemName}
          className="h-48 w-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-2xl font-bold text-primary">
          {itemName}
        </h2>
        <p className="text-sm text-white badge bg-primary p-3">
          {categoryName}
        </p>
        <p className="text-sm my-2 line-clamp-5">{description}</p>
        <div className="flex justify-between items-center text-sm">
          <span className=" font-semibold text-primary">Price: ${price}</span>
          <span
            className={`font-semibold ${
              stockStatus > 0 ? "text-green-500" : "text-red-500"
            }`}
          >
            {stockStatus > 0 ? "In Stock" : "Out of Stock"}
          </span>
        </div>
        <div className=" mt-2 text-sm">
          <div className="flex items-center space-x-2">
            <ReactStars
              count={5}
              value={parseFloat(rating)}
              size={24}
              edit={false}
              isHalf={true}
              activeColor="#FACC15"
              color="#E5E7EB"
            />
            <span className="text-sm text-gray-600">{rating}</span>
          </div>
          <p className="italic mt-1">{customization}</p>
        </div>
        <div className="card-actions mt-4">
          <Link
            to={`/equipments/${_id}`}
            className="btn bg-primary border-primary text-white hover:bg-light hover:border-light btn-sm"
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
