import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Equipment from "../components/Equipment";
import { BiSort } from "react-icons/bi";

const AllSportsEquipment = () => {
  const equipments = useLoaderData();

  const [allEquipments, setAllEquipments] = useState(equipments);

  const sortAscending = () => {
    const sortedList = [...allEquipments].sort((a, b) => a.price - b.price);
    setAllEquipments(sortedList);
  };

  return (
    <div className="mb-24 mt-12 container w-11/12 mx-auto">
      <h2 className="text-5xl font-poppins font-bold uppercase mb-6 text-center">
        All <span className="text-primary">Sports Equipment</span>
      </h2>
      <div className="flex justify-end mb-4">
        <button
          onClick={sortAscending}
          className="btn btn-outline text-primary border-primary hover:bg-light hover:border-light"
        >
          <BiSort className="text-lg" /> Sort by Price (Ascending)
        </button>
      </div>
      <div className="font-poppins grid justify-items-center mb-12 md:gap-x-7 gap-y-7 grid-cols-1 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
        {allEquipments.map((equipment) => (
          <Equipment key={equipment._id} equipment={equipment}></Equipment>
        ))}
      </div>
    </div>
  );
};

export default AllSportsEquipment;
