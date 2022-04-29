import React, { useState } from "react";
import { useHistory } from "react-router";
import { axiosConfig } from "../../../utils/axiosConfig";
import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";

import { TextField, Button, Dialog } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import styles from "./CollegeSignin.module.scss";

export default function CollegeSignin() {
  const history = useHistory();

  const [collegeCode, setCollegeCode] = useState();
  const [password, setPassword] = useState();
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const user = {
      username: collegeCode,
      password: password,
      role: "college",
    };

    if (!collegeCode || !password) {
      toast.error("Please fill the required fields");
    } else {
      axiosConfig
        .post("/college/signin", user)
        .then((res) => {
          if (res.status !== 200) return;
          let user = res.data.user;
          localStorage.setItem("token", JSON.stringify(res.data.token));
          localStorage.setItem("user", JSON.stringify(user));
          localStorage.setItem("isAuth", true);
          history.push("/college/dashboard");
          window.location.reload(false);
          toast.success("Login Successfull!");
          setLoading(false);
        })
        .catch((err) => {
          toast.error("There was an Error. Please try again later");
          console.log("ada", err.response.data.message);
          setLoading(false);
        });
    }
    setLoading(false);
  };

  const handleBack = () => {
    setOpen(false);
    history.push("/");
  };

  return (
    <Dialog
      open={open}
      fullScreen={open}
      maxWidth={"100vw"}
      fullWidth={"100vw"}
    >
      <div className={styles.parent}>
        {/* <div className="container my-5">
          <ArrowBackIcon
            fontSize="large"
            className="btn p-0 m-0"
            onClick={() => handleBack()}
          />
        </div> */}
        <div className={styles.signinForm}>
          <h1>College Signin</h1>
          <div>
            <TextField
              id="outlined-basic"
              fullWidth
              label="College Code"
              margin="normal"
              variant="outlined"
              onChange={(e) => setCollegeCode(e.target.value)}
            />
          </div>
          <div>
            <TextField
              id="outlined-basic"
              label="Password"
              margin="normal"
              variant="outlined"
              fullWidth
              onChange={(e) => setPassword(e.target.value)}
              type="password"
            />
          </div>
          <div className="text-end">
            <p>Forget Password?</p>
          </div>
          <Button
            disabled={loading}
            onClick={handleSubmit}
            fullWidth
            variant="contained"
            type="submit"
          >
            Sign In
          </Button>
        </div>
        <div className="text-center mt-4">
          <p>
            Don't have account?
            <Link to="/college/signup"> Register here</Link>
          </p>
        </div>
        <Toaster position="bottom-right" />
      </div>
    </Dialog>
  );
}
