import PropTypes from "prop-types";
import { MdOutlineWatchLater } from "react-icons/md";

const Subscription = ({ subscription }) => {
  const { trainingName, trainingType, price, description, image, duration } =
    subscription;

  return (
    <div className="card card-compact w-full lg:w-80 xl:w-96 rounded-none p-0">
      <figure>
        <img
          src={image}
          alt={trainingName}
          className="h-56 w-full object-cover"
        />
      </figure>
      <div className="card-body pt-2">
        <h2 className="card-title uppercase">{trainingName}</h2>
        <p className="font-semibold">{trainingType}</p>
        <p className="font-roboto">{description}</p>
        <div className="flex justify-between items-center">
          <span className="font-semibold">${price}</span>
          <span className="flex items-center">
            <MdOutlineWatchLater className="mr-1 " /> {duration}
          </span>
        </div>
        <div className="card-actions mt-2">
          <button className="btn bg-primary border-primary text-white hover:bg-light hover:border-light rounded-none">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

Subscription.propTypes = {
  subscription: PropTypes.object,
};

export default Subscription;
