import React from "react";

import styles from "./Home.module.scss";

//Components

export default function Home() {
  return (
    <>
      <div
        className={styles.imgParent}
        // style={{ background: "url(/Images/wave.jpg)" }}
      >
        <div className={styles.content}>
          {/* <div className="container"> */}
          <button className="btn btn-lg btn-primary m-">
            Meet the Counseller
          </button>
          <button className="btn btn-lg btn-success m-3">Survey</button>
          {/* </div> */}
        </div>
      </div>
    </>
  );
}
