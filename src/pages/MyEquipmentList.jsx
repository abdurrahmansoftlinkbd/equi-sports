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
            {equipments.map((equipment, i) => (
              <tr key={equipment._id}>
                <th>{i + 1}</th>
                <td>{equipment.itemName}</td>
                <td>{equipment.categoryName}</td>
                <td>${equipment.price}</td>
                <td>
                  <Link
                    to={`/equipments/${equipment._id}`}
                    className="btn btn-sm bg-primary border-primary hover:bg-light hover:border-light text-white mr-2"
                  >
                    View Details
                  </Link>
                  <Link
                    to={`/updateEquipment/${equipment._id}`}
                    className="btn btn-sm btn-success text-white mr-2"
                  >
                    Update
                  </Link>
                  <button
                    onClick={() => handleDelete(equipment._id)}
                    className="btn btn-sm text-white btn-error"
                  >
                    Delete
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

export default MyEquipmentList;
