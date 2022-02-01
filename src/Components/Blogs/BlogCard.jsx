import React from "react";

import styles from "./BlogCard.module.scss";

export default function BlogCard({ blog, i }) {
  return (
    <div className={styles.blogCard} key={i}>
      <div className="row">
        <div className="col-md-4 overflow-hidden">
          <img src={blog.img} height="200px" alt="" />
        </div>
        <div className="col-md-7 d-flex justify-content-center flex-column">
          <div className="ms-5">
            <h1>{blog.header}</h1>
            <p>{blog.smallContent}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
