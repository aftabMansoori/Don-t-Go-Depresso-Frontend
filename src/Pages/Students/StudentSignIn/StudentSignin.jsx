import React, { useState } from "react";
import { useHistory } from "react-router";
import { axiosConfig } from "../../../utils/axiosConfig";
import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";

import { TextField, Button, Dialog } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import styles from "./StudentSignin.module.scss";

export default function StudentSignin() {
  const history = useHistory();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(true);

  const handleSubmit = (e) => {
    setLoading(true);
    axiosConfig
      .post("/student/signin", {
        username: email,
        password: password,
        role: "student",
      })
      .then((res) => {
        if (res.status !== 200) return;
        localStorage.setItem("user", JSON.stringify(res.data.user));
        localStorage.setItem("token", JSON.stringify(res.data.token));
        localStorage.setItem("isAuth", true);
        toast.success("Sign in Sucessfull");
        history.push("/student/dashboard");
        window.location.reload(false);
        setLoading(false);
      })
      .catch((err) => {
        console.log("ada", err.message);
        toast.error(err.response.data.message);
        setLoading(false);
      });
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
      <div className="container-fluid">
        <div className="row">
          <div className="col-6">
            <div className="container my-5">
              <ArrowBackIcon
                fontSize="large"
                className="btn p-0 m-0"
                onClick={() => handleBack()}
              />
            </div>
            <section className={styles.parent}>
              <div className={styles.loginForm}>
                <h1 className="text-center">Sign in</h1>
                <p className="text-center">Sign in to safe mental space!</p>
                <div>
                  <TextField
                    id="outlined-basic"
                    label="Email"
                    margin="normal"
                    variant="outlined"
                    fullWidth
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div>
                  <TextField
                    id="outlined-basic"
                    type="password"
                    label="Password"
                    margin="normal"
                    variant="outlined"
                    fullWidth
                    onChange={(e) => setPassword(e.target.value)}
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
                  size="large"
                >
                  Sign In
                </Button>
                <div className="text-center mt-4">
                  <p>
                    Don't have account?
                    <Link to="/student/signup"> Register here</Link>
                  </p>
                </div>
              </div>

              <Toaster position="bottom-right" reverseOrder={false} />
            </section>
          </div>
          <div className="col-6">
            <div
              className="d-flex align-items-center justify-content-center"
              style={{ height: "100vh", background: "#fef5d9" }}
            >
              <img className="img-fluid" src="/Images/signinGif.gif" alt="" />
            </div>
          </div>
        </div>
      </div>
    </Dialog>
  );
}
