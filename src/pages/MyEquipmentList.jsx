import { useLoaderData } from "react-router-dom";

const MyEquipmentList = () => {
  const equipments = useLoaderData();

  return (
    <div className="container w-11/12 mx-auto my-24 ">
      <h1 className="text-5xl font-bold text-primary mb-12 text-center">
        My Equipment List
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {equipments.map((equipment) => (
          <div key={equipment._id} className="card shadow-lg bg-base-100">
            <figure className="overflow-hidden">
              <img
                src={equipment.photoUrl}
                alt={equipment.itemName}
                className="h-48 w-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-2xl font-bold text-primary">
                {equipment.itemName}
              </h2>
              <p className="text-gray-600">{equipment.description}</p>
              <div className="mt-2">
                <p>
                  <span className="font-semibold">Category:</span>{" "}
                  {equipment.categoryName}
                </p>
                <p>
                  <span className="font-semibold">Price:</span> $
                  {equipment.price}
                </p>
                <p>
                  <span className="font-semibold">Stock Status:</span>{" "}
                  <span
                    className={`${
                      equipment.stockStatus > 0 ? "text-success" : "text-error"
                    } font-bold`}
                  >
                    {equipment.stockStatus > 0 ? "In Stock" : "Out of Stock"}
                  </span>
                </p>
              </div>
              <div className="card-actions justify-center mt-6">
                <button
                  //   onClick={() => handleUpdate(equipment._id)}
                  className="btn bg-primary border-primary text-white hover:bg-light hover:border-light"
                >
                  Update
                </button>
                <button
                  //   onClick={() => confirmDelete(equipment)}
                  className="btn text-white btn-error"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyEquipmentList;
