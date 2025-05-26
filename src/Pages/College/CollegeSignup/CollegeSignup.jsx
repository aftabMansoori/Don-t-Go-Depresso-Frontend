import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import { axiosConfig } from "../../../utils/axiosConfig";
import toast, { Toaster } from "react-hot-toast";

import { TextField, Button, Dialog } from "@mui/material";

import styles from "./CollegeSignup.module.scss";

export default function CollegeSignup() {
  const navigate = useNavigate();

  const [college, setCollege] = useState({
    collegeCode: "",
    collegeName: "",
    password: "",
    confPassword: "",
    collegePhoneNo: "",
    collegeAddress: "",
    collegeLocation: "",
  });
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    axiosConfig
      .post("/college/signup", college)
      .then((res) => {
        if (res.status !== 201) return;
        navigate("/college/signin");
        toast.success("Sign Up Successfull");
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err.message);
        toast.error("There was an error");
      });
  };

  return (
    <Dialog
      open={open}
      fullScreen={open}
      maxWidth={"100vw"}
      fullWidth={"100vw"}
    >
      <div className={styles.parent}>
        <h1 className="mb-5">CollegeSignup</h1>
        <div className={styles.signupForm}>
          <div>
            <TextField
              id="outlined-basic"
              onChange={(e) =>
                setCollege({ ...college, collegeName: e.target.value })
              }
              fullWidth
              label="College Name"
              margin="normal"
              variant="outlined"
            />
          </div>
          <div>
            <TextField
              id="outlined-basic"
              onChange={(e) =>
                setCollege({ ...college, collegeCode: e.target.value })
              }
              label="College Code"
              fullWidth
              margin="normal"
              variant="outlined"
            />
          </div>
          <div>
            <TextField
              id="outlined-basic"
              onChange={(e) =>
                setCollege({ ...college, collegePhoneNo: e.target.value })
              }
              label="Phone Number"
              fullWidth
              margin="normal"
              variant="outlined"
            />
          </div>
          <div>
            <TextField
              id="outlined-basic"
              onChange={(e) =>
                setCollege({ ...college, password: e.target.value })
              }
              label="Password"
              fullWidth
              margin="normal"
              variant="outlined"
              type="password"
            />
          </div>
          <div>
            <TextField
              id="outlined-basic"
              onChange={(e) =>
                setCollege({ ...college, confPassword: e.target.value })
              }
              label="Confirm Password"
              fullWidth
              margin="normal"
              variant="outlined"
              type="password"
            />
          </div>
          <div>
            <TextField
              id="outlined-basic"
              onChange={(e) =>
                setCollege({ ...college, collegeAddress: e.target.value })
              }
              fullWidth
              label="College Address"
              margin="normal"
              variant="outlined"
            />
          </div>
          <div>
            <TextField
              id="outlined-basic"
              onChange={(e) =>
                setCollege({ ...college, collegeLocation: e.target.value })
              }
              fullWidth
              label="College Location"
              margin="normal"
              variant="outlined"
            />
          </div>
          <Button
            disabled={loading}
            variant="contained"
            fullWidth
            type="submit"
            onClick={handleSubmit}
          >
            Sign Up
          </Button>
        </div>
        <div className="text-center mt-4">
          <p>
            Already have an account?
            <Link to="/college/signin"> Login here</Link>
          </p>
        </div>
        <Toaster position="bottom-right" />
      </div>
    </Dialog>
  );
}
