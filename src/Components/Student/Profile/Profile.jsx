import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import styles from "./Profile.module.scss";

//MUI
import { TextField, Button, Dialog } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function Profile() {
  const history = useHistory();

  const [open, setOpen] = useState(true);

  const handleBack = () => {
    setOpen(false);
    // history.push("/");
    history.goBack();
  };

  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <>
      <Dialog
        open={open}
        fullScreen={open}
        maxWidth={"100vw"}
        fullWidth={"100vw"}
      >
        <div className="container mt-4 mb-3">
          <ArrowBackIcon
            fontSize="large"
            className="btn p-0 m-0"
            onClick={() => handleBack()}
          />
        </div>
        <div className={styles.parent + " container"}>
          {/* <h3>Profile</h3> */}
          <div className="row d-flex align-items-end">
            <div className="col-md-4">
              <div>
                <img
                  src="https://i.pinimg.com/236x/07/33/ba/0733ba760b29378474dea0fdbcb97107.jpg"
                  alt=""
                  className="img-fluid rounded"
                />
              </div>
            </div>
            <div className="col-md-8">
              <div>
                <label>Name:</label>
                <p>{user.studentName}</p>
              </div>
              <div className="d-flex justify-content-between">
                <span>
                  <label>Gender:</label>
                  <p>{user.gender}</p>
                </span>
                <span>
                  <label>Age:</label>
                  <p>{user.studentAge}</p>
                </span>
                <span>
                  <label>Class:</label>
                  <p>{user.studentClass}</p>
                </span>
              </div>
            </div>
          </div>
          <div className="my-3">
            <div>
              <label>About Me:</label>
              <p>{user.aboutStudent}</p>
            </div>
            <label>Email:</label>
            <p>{user.studentClgEmail}</p>
            <label>PRN No:</label>
            <p>{user.studentPRN}</p>
            <label>Phone No:</label>
            <p>{user.studentPhoneNo}</p>
            <label>Medication: </label>
            <p>{user.abtMedication}</p>
          </div>
        </div>
      </Dialog>
    </>
  );
}
