import React, { useState } from "react";
import { useHistory } from "react-router";
import toast, { Toaster } from "react-hot-toast";
import { axiosConfig } from "../../../utils/axiosConfig";
import { counsellorSignin } from "../../../utils/api";

import { TextField, Button, Dialog } from "@mui/material";

import styles from "./CSSignin.module.scss";

export default function CSSignin() {
  const history = useHistory();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    setLoading(true);

    axiosConfig
      .post(counsellorSignin, {
        username,
        password,
        role: "counsellor",
      })
      .then((res) => {
        if (res.status !== 200) return;
        let user = res.data.user;
        localStorage.setItem("token", JSON.stringify(res.data.token));
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("isAuth", true);
        history.push("/counsellor/dashboard");
        toast.success("Login Successfull!");
        setLoading(false);
      })
      .catch((err) => {
        toast.error("There was an Error. Please try again later");
        console.log("ada", err.response.data.message);
        setLoading(false);
      });
    setLoading(false);
  };

  return (
    <>
      <Dialog
        open={true}
        fullScreen={true}
        maxWidth={"100vw"}
        fullWidth={"100vw"}
      >
        <div className="container ">
          <section className={styles.parent}>
            <div className={styles.loginForm}>
              <h1 className="text-center">Counsellor Signin</h1>
              <div>
                <TextField
                  id="outlined-basic"
                  label="Username"
                  margin="normal"
                  variant="outlined"
                  fullWidth
                  onChange={(e) => setUsername(e.target.value)}
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
                onClick={() => handleSubmit()}
                fullWidth
                variant="contained"
                type="submit"
                size="large"
              >
                Sign In
              </Button>
            </div>
            <Toaster position="bottom-right" reverseOrder={false} />
          </section>
        </div>
      </Dialog>
    </>
  );
}
