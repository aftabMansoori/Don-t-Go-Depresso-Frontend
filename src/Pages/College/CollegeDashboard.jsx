import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { axiosConfig } from "../../utils/axiosConfig";
import toast, { Toaster } from "react-hot-toast";
import { collegeLogout } from "../../redux/action/collegeAction";

import { Button } from "@mui/material";
import axios from "axios";

export default function CollegeDashboard() {
  const dispatch = useDispatch();
  const history = useHistory();

  const [loading, setLoading] = useState(false);
  const [studentMail, setStudentMail] = useState("");

  const handleSignOut = (e) => {
    e.preventDefault();
    setLoading(true);

    axiosConfig
      .get("/college/signout")
      .then((res) => {
        if (res.status !== 200) return;
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        localStorage.removeItem("isAuth");
        history.push("/college/signin");
        toast.success("Logout Successfull");
        setLoading(false);
      })
      .catch((err) => {
        console.log("ada", err.message);
        setLoading(false);
        toast.error("There was an error");
      });
  };

  const handleAddStudent = (e) => {
    e.preventDefault();
    axiosConfig.post("/college/add-mails");
  };

  return (
    <div className="container">
      <h1>College DashBoard</h1>
      <Button
        variant="contained"
        type="submit"
        disabled={loading}
        className={"my-2"}
      >
        <Link to="/college/add-emails">Add Student</Link>
      </Button>
      <br />
      <Button
        onClick={handleSignOut}
        variant="contained"
        type="submit"
        disabled={loading}
      >
        Sign Out
      </Button>
    </div>
  );
}
