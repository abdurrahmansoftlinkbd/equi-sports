import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const AllSportsEquipment = () => {
  const equipments = useLoaderData();

  //   const navigate = useNavigate();

  //   const handleViewDetails = (id) => {
  //     navigate(`/equipment/${id}`);
  //   };

  const [allEquipments, setAllEquipments] = useState(equipments);

  const sortAscending = () => {
    const sortedList = [...allEquipments].sort((a, b) => a.price - b.price);
    setAllEquipments(sortedList);
  };

  return (
    <div className="my-24 container w-11/12 mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">
        All Sports Equipment
      </h1>
      {/* Sort Button */}
      <div className="flex justify-end mb-4">
        <button
          onClick={sortAscending}
          className="btn btn-outline hover:bg-light hover:border-light"
        >
          Sort by Price (Ascending)
        </button>
      </div>
      <div className="overflow-x-auto w-full">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {allEquipments.map((equipment, i) => (
              <tr key={equipment._id}>
                <th>{i + 1}</th>
                <td>{equipment.itemName}</td>
                <td>{equipment.categoryName}</td>
                <td>${equipment.price}</td>
                <td>
                  <button
                    //   onClick={() => handleViewDetails(equipment.id)}
                    className="btn btn-sm bg-primary border-primary hover:bg-light hover:border-light text-white"
                  >
                    View Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllSportsEquipment;
