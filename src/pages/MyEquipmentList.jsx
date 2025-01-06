import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../provider/AuthProvider";

const MyEquipmentList = () => {
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const [equipments, setEquipments] = useState([]);

  useEffect(() => {
    fetch(
      `https://b10-a10-equi-sports-server-xi.vercel.app/myEquipments/${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setEquipments(data);
        setLoading(false);
      });
  }, [user]);

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://b10-a10-equi-sports-server-xi.vercel.app/equipments/${_id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your equipment has been deleted.",
                icon: "success",
              });
              const remaining = equipments.filter(
                (equipment) => equipment._id !== _id
              );
              setEquipments(remaining);
            }
          });
      }
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  return (
    <div className="container w-11/12 mx-auto mt-12 mb-24 ">
      <h2 className="text-5xl font-bold font-poppins text-primary mb-12 text-center uppercase">
        My Equipment List
      </h2>
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
                <Link
                  to={`/updateEquipment/${equipment._id}`}
                  //   onClick={() => handleUpdate(equipment._id)}
                  className="btn bg-primary border-primary text-white hover:bg-light hover:border-light"
                >
                  Update
                </Link>
                <button
                  onClick={() => handleDelete(equipment._id)}
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
