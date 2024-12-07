import { useLoaderData } from "react-router-dom";
import ReactStars from "react-rating-stars-component";

const Details = () => {
  const details = useLoaderData();

  const {
    itemName,
    photoUrl,
    categoryName,
    description,
    price,
    rating,
    customization,
    processingTime,
    stockStatus,
    userName,
  } = details;

  return (
    <div className="container w-11/12 mx-auto my-24 md:px-0">
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure className="lg:w-1/2">
          <img
            src={photoUrl}
            alt={itemName}
            className="w-full h-full object-cover"
          />
        </figure>
        <div className="card-body lg:w-1/2">
          <h2 className="card-title text-3xl font-bold text-primary mb-4">
            {itemName}
          </h2>
          <p className="text-lg text-gray-600 mb-4">{description}</p>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <span className="font-semibold">Category:</span>{" "}
              <span>{categoryName}</span>
            </div>
            <div>
              <span className="font-semibold">Price:</span>{" "}
              <span className="text-primary font-bold">${price}</span>
            </div>
            <div>
              <span className="font-semibold">Rating:</span>{" "}
              <div className="flex items-center space-x-2">
                <ReactStars
                  count={5}
                  value={rating}
                  size={24}
                  edit={false}
                  isHalf={true}
                  activeColor="#FACC15"
                  color="#E5E7EB"
                />
                <span className="text-sm text-gray-600">{rating}</span>
              </div>
            </div>
            <div>
              <span className="font-semibold">Customization:</span>{" "}
              <span>{customization}</span>
            </div>
            <div>
              <span className="font-semibold">Processing Time:</span>{" "}
              <span>{processingTime}</span>
            </div>
            <div>
              <span className="font-semibold">Stock Status:</span>{" "}
              <span
                className={`${
                  stockStatus > 0 ? "text-success" : "text-error"
                } font-bold`}
              >
                {stockStatus > 0 ? "In Stock" : "Out of Stock"}
              </span>
            </div>
            <div>
              <span className="font-semibold">Added By:</span>{" "}
              <span>{userName}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
