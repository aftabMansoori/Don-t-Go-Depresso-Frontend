import React, { useState } from "react";
import { useHistory } from "react-router";
import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
import { axiosConfig } from "../../../utils/axiosConfig";

import { TextField, Button, Dialog } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import styles from "./CSSignin.module.scss";

export default function CSSignin() {
  const history = useHistory();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(true);

  const handleBack = () => {
    setOpen(false);
    history.push("/");
  };

  return (
    <>
      <Dialog
        open={open}
        fullScreen={open}
        maxWidth={"100vw"}
        fullWidth={"100vw"}
      >
        <div className="container my-5">
          <ArrowBackIcon
            fontSize="large"
            className="btn p-0 m-0"
            onClick={() => handleBack()}
          />
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
                // onClick={handleSubmit}
                fullWidth
                variant="contained"
                type="submit"
                size="large"
              >
                Sign In
              </Button>
            </div>
            <Toaster position="top-right" reverseOrder={false} />
          </section>
        </div>
      </Dialog>
    </>
  );
}
