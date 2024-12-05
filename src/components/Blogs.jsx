import { useEffect, useState } from "react";
import Blog from "./Blog";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("../blogs.json")
      .then((res) => res.json())
      .then((blogsData) => setBlogs(blogsData));
  }, []);

  return (
    <div>
      <h2 className="text-center text-6xl font-bold">
        FROM <span className="text-primary">BLOG</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-12">
        {blogs.map((blog, i) => (
          <Blog key={i} blog={blog}></Blog>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
