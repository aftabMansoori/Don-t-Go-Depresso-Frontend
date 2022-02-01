import React from "react";

import { blogData } from "./data";
import BlogCard from "../../Components/Blogs/BlogCard";

export default function Blogs() {
  return (
    <div className="container d-flex flex-column align-items-center my-5">
      {blogData.map((blog, i) => (
        <BlogCard blog={blog} i={i} />
      ))}
    </div>
  );
}
