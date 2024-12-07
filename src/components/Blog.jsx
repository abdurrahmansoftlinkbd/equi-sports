import PropTypes from "prop-types";
import { FaRegCommentAlt } from "react-icons/fa";

const Blog = ({ blog }) => {
  const { title, category, commentsCount, description, image } = blog;

  return (
    <div className="card card-compact w-full lg:w-80 xl:w-96 rounded-none p-0">
      <figure>
        <img src={image} alt={category} />
      </figure>
      <div className="card-body pt-2">
        <div className="flex justify-between items-center">
          <div className="badge bg-primary text-white p-3">{category}</div>
          <span className="flex items-center">
            <FaRegCommentAlt className="mr-1 " /> {commentsCount} Comments
          </span>
        </div>
        <h2 className="card-title text-2xl">{title}</h2>
        <p>{description}</p>
        <div className="card-actions">
          <button className="btn bg-primary border-primary text-white hover:bg-light hover:border-light rounded-none">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object,
};

export default Blog;
