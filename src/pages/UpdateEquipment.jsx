import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";

const UpdateEquipment = () => {
  const equipments = useLoaderData();

  const {
    _id,
    itemName,
    photoUrl,
    categoryName,
    description,
    price,
    rating,
    customization,
    processingTime,
    stockStatus,
  } = equipments;

  const handleUpdateEquipment = (e) => {
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

    const updateEquipment = {
      itemName,
      photoUrl,
      categoryName,
      description,
      price,
      rating,
      customization,
      processingTime,
      stockStatus,
    };

    // send data to server
    fetch(`http://localhost:5000/updateEquipments/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateEquipment),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success(`${itemName} Updated Successfully!`);
        }
      });

    form.reset();
  };

  return (
    <div className=" p-24 font-poppins">
      <h2 className="text-4xl font-bold text-center mb-8">
        Update Your Equipment Details
      </h2>
      <form onSubmit={handleUpdateEquipment}>
        {/* 1st row */}
        <div className="md:flex mb-8">
          <div className=" form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Item Name</span>
            </label>
            <label>
              <input
                className="input input-bordered w-full"
                type="text"
                name="itemName"
                defaultValue={itemName}
                placeholder="Item Name"
              />
            </label>
          </div>
          <div className=" form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <label>
              <input
                className="input input-bordered  w-full"
                type="text"
                name="photoUrl"
                defaultValue={photoUrl}
                placeholder="Photo URL"
              />
            </label>
          </div>
        </div>
        {/* 2nd row */}
        <div className="md:flex mb-8">
          <div className=" form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Category Name</span>
            </label>
            <label>
              <input
                className="input input-bordered  w-full"
                type="text"
                name="categoryName"
                defaultValue={categoryName}
                placeholder="Category Name"
              />
            </label>
          </div>
          <div className=" form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <label>
              <input
                className="input input-bordered  w-full"
                type="text"
                name="description"
                defaultValue={description}
                placeholder="Description"
              />
            </label>
          </div>
        </div>
        {/* 3rd row */}
        <div className="md:flex mb-8">
          <div className=" form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <label>
              <input
                className="input input-bordered  w-full"
                type="text"
                name="price"
                defaultValue={price}
                placeholder="Price"
              />
            </label>
          </div>
          <div className=" form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Rating</span>
            </label>
            <label>
              <input
                className="input input-bordered w-full"
                type="text"
                name="rating"
                defaultValue={rating}
                placeholder="Rating"
              />
            </label>
          </div>
        </div>
        {/* 4th row */}
        <div className="md:flex mb-8">
          <div className=" form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Customization</span>
            </label>
            <label>
              <input
                className="input input-bordered  w-full"
                type="text"
                name="customization"
                defaultValue={customization}
                placeholder="Customization"
              />
            </label>
          </div>
          <div className=" form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Processing Time</span>
            </label>
            <label>
              <input
                className="input input-bordered w-full"
                type="text"
                name="processingTime"
                defaultValue={processingTime}
                placeholder="Processing Time"
              />
            </label>
          </div>
        </div>
        {/* 5th row */}
        <div className="mb-8">
          <div className=" form-control w-full">
            <label className="label">
              <span className="label-text">Stock Status</span>
            </label>
            <label>
              <input
                className="input input-bordered  w-full"
                type="text"
                name="stockStatus"
                defaultValue={stockStatus}
                placeholder="Stock Status"
              />
            </label>
          </div>
        </div>
        {/* submit button */}
        <input
          type="submit"
          value="Update Equipment"
          className="btn btn-block bg-primary border-primary text-white hover:bg-light hover:border-light"
        />
      </form>
    </div>
  );
};

export default UpdateEquipment;
