import React from "react";
import { useNavigate } from "react-router-dom";

import styles from "./Quiz.module.scss";

export default function StartPage({ incrementPage }) {
  const navigate = useNavigate();

  return (
    <>
      <div className={styles.startPage + " container "}>
        <h1 className="text-white">Start with the questions</h1>
        {/* <p className="w-50">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
          nostrum accusamus delectus temporibus, praesentium assumenda sint
          dolore eum voluptatum dicta ducimus aspernatur impedit aliquid, fugit
          repudiandae ut eos recusandae laudantium!
        </p> */}
        <div>
          <button onClick={incrementPage} className={styles.startBtn}>
            Start
          </button>
          <button onClick={() => navigate(-1)} className={styles.startBtn}>
            Go Back
          </button>
        </div>
      </div>
    </>
  );
}
