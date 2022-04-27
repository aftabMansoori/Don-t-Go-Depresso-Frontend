import React from "react";

import styles from "./Profile.module.scss";

export default function Profile() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <>
      <div>
        <div className="container mt-4 mb-3"></div>
        <div className={styles.parent + " container"}>
          <div className="w-100 row">
            <div className="col-5">
              <img
                src="https://i.pinimg.com/236x/07/33/ba/0733ba760b29378474dea0fdbcb97107.jpg"
                alt=""
                className="img-fluid rounded-circle"
              />
            </div>
            <div className="col-7 d-flex justify-content-end flex-column">
              <h6 className="mb-4 fw-bold">Edit Profile</h6>
              <div className="d-flex justify-content-between">
                <span>
                  <label className="fw-bold">Name:</label>
                  <p>{user.studentName}</p>
                </span>
                <span>
                  <label className="fw-bold">Age:</label>
                  <p>{user.studentAge}</p>
                </span>
                <span>
                  <label className="fw-bold">PRN No:</label>
                  <p>{user.studentPRN}</p>
                </span>
              </div>
            </div>
          </div>
          <div className="my-5 py-2 px-3">
            <h4 className="mb-3">My Profile</h4>
            <div>
              <label className="fw-bold">About Me:</label>
              <p>{user.aboutStudent}</p>
            </div>
            <label className="fw-bold">Gender:</label>
            <p>{user.gender}</p>
            <label className="fw-bold">Class:</label>
            <p>{user.studentClass}</p>
            <label className="fw-bold">Email:</label>
            <p>{user.studentClgEmail}</p>
            <label className="fw-bold">Phone No:</label>
            <p>{user.studentPhoneNo}</p>
            <label className="fw-bold">Medication: </label>
            <p>{user.abtMedication}</p>
          </div>
        </div>
      </div>
    </>
  );
}
