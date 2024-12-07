import PropTypes from "prop-types";

const Categories = ({ equipments }) => {
  // const {categoryName} =
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-8">
      {equipments.map((equipment) => (
        <button
          key={equipment._id}
          //   onClick={() => handleCategoryClick(category)}
          className="btn btn-sm btn-outline text-primary border-primary hover:bg-primary hover:border-primary"
        >
          {equipment.categoryName}
        </button>
      ))}
    </div>
  );
};

Categories.propTypes = {
  equipments: PropTypes.array,
};

export default Categories;
