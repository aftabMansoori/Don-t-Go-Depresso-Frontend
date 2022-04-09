import React, { useState } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { axiosConfig } from "../../../utils/axiosConfig";
import toast, { Toaster } from "react-hot-toast";

import { Button } from "@mui/material";
import styles from "./CollegeDashboard.module.scss";

export default function CollegeDashboard() {
  const history = useHistory();

  const [loading, setLoading] = useState(false);
  const [studentMail, setStudentMail] = useState("");

  // const handleSignOut = (e) => {
  //   e.preventDefault();
  //   setLoading(true);

  //   axiosConfig
  //     .get("/college/signout")
  //     .then((res) => {
  //       if (res.status !== 200) return;
  //       localStorage.clear();
  //       history.push("/college/signin");
  //       toast.success("Logout Successfull");
  //       setLoading(false);
  //     })
  //     .catch((err) => {
  //       console.log("ada", err.message);
  //       setLoading(false);
  //       toast.error("There was an error");
  //     });
  // };

  const handleAddStudent = (e) => {
    e.preventDefault();
    axiosConfig.post("/college/add-mails");
  };

  return (
    <>
      <div className="container">
        <Button
          variant="contained"
          type="submit"
          disabled={loading}
          className={"my-2"}
        >
          <Link to="/college/add-emails" className="text-white">
            Add Student
          </Link>
        </Button>

        <div className="d-flex align-items-center">
          <div className={styles.data}>
            <h1>49</h1>
            <p>Students</p>
          </div>

          <div className={styles.data}>
            <h1>49</h1>
            <p>Students</p>
          </div>
        </div>
      </div>
    </>
  );
}
