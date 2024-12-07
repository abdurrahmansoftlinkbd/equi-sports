import { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../provider/AuthProvider";

const AddEquipment = () => {
  const { user } = useContext(AuthContext);

  const handleAddEquipment = (e) => {
    e.preventDefault();
    const form = e.target;
    const itemName = form.itemName.value;
    const photoUrl = form.photoUrl.value;
    const categoryName = form.categoryName.value;
    const description = form.description.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const customization = form.customization.value;
    const processingTime = form.processingTime.value;
    const stockStatus = form.stockStatus.value;
    const userName = form.userName.value;
    const userEmail = form.userEmail.value;

    const addedEquipment = {
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
      userEmail,
    };

    // send data to server
    fetch("http://localhost:5000/equipments", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addedEquipment),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast.success(`${itemName} Added Successfully!`);
        }
      });

    form.reset();
  };

  return (
    <div className="container w-11/12 mx-auto my-24 font-poppins">
      <h2 className="text-4xl font-bold text-center mb-8">
        Add New <span className="text-primary">Equipment</span>
      </h2>
      <form onSubmit={handleAddEquipment}>
        {/* 1st row */}
        <div className="md:flex gap-4 mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Item Name</span>
            </label>
            <label>
              <input
                className="input input-bordered w-full"
                type="text"
                name="itemName"
                placeholder="Item Name"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <label>
              <input
                className="input input-bordered  w-full"
                type="text"
                name="photoUrl"
                placeholder="Photo URL"
              />
            </label>
          </div>
        </div>
        {/* 2nd row */}
        <div className="md:flex gap-4 mb-8">
          <div className=" form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Category Name</span>
            </label>
            <label>
              <input
                className="input input-bordered  w-full"
                type="text"
                name="categoryName"
                placeholder="Category Name"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <label>
              <input
                className="input input-bordered  w-full"
                type="text"
                name="description"
                placeholder="Description"
              />
            </label>
          </div>
        </div>
        {/* 3rd row */}
        <div className="md:flex gap-4 mb-8">
          <div className=" form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <label>
              <input
                className="input input-bordered  w-full"
                type="text"
                name="price"
                placeholder="Price"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Rating</span>
            </label>
            <label>
              <input
                className="input input-bordered w-full"
                type="text"
                name="rating"
                placeholder="Rating"
              />
            </label>
          </div>
        </div>
        {/* 4th row */}
        <div className="md:flex gap-4 mb-8">
          <div className=" form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Customization</span>
            </label>
            <label>
              <input
                className="input input-bordered  w-full"
                type="text"
                name="customization"
                placeholder="Customization"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Processing Time</span>
            </label>
            <label>
              <input
                className="input input-bordered w-full"
                type="text"
                name="processingTime"
                placeholder="Processing Time"
              />
            </label>
          </div>
        </div>
        {/* 5th row */}
        <div className="mb-8">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Stock Status</span>
            </label>
            <label>
              <input
                className="input input-bordered  w-full"
                type="text"
                name="stockStatus"
                placeholder="Stock Status"
              />
            </label>
          </div>
        </div>
        {/* 6th row */}
        <div className="md:flex gap-4 mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">User Name</span>
            </label>
            <label>
              <input
                className="input input-bordered w-full"
                type="text"
                name="userName"
                placeholder="User Name"
                defaultValue={user?.displayName}
                readOnly
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">User Email</span>
            </label>
            <label>
              <input
                className="input input-bordered  w-full"
                type="text"
                name="userEmail"
                placeholder="User Email"
                defaultValue={user?.email}
                readOnly
              />
            </label>
          </div>
        </div>
        {/* submit button */}
        <input
          type="submit"
          value="Add Equipment"
          className="btn btn-block bg-primary border-primary text-white hover:bg-light hover:border-light"
        />
      </form>
    </div>
  );
};

export default AddEquipment;
