import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { axiosConfig } from "../../../utils/axiosConfig";
import toast, { Toaster } from "react-hot-toast";

// import { studentRegister } from "../../redux/action/studentAction";

import { TextField, Button, Dialog } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import styles from "./StudentSignUp.module.scss";

export default function StudentSignUp() {
  const dispatch = useDispatch();
  const history = useHistory();

  let [student, setStudent] = useState({
    studentClgEmail: "",
    studentClgCode: "",
    password: "",
    confPassword: "",
  });
  const [open, setOpen] = useState(true);
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  const handleSubmit = (e) => {
    setMsg("");
    setLoading(true);
    axiosConfig
      .post("/student/signup", { student })
      .then((res) => {
        if (res.status !== 201) return;
        axiosConfig
          .post("/student/signin", {
            username: student.studentClgEmail,
            password: student.password,
            role: "student",
          })
          .then((res) => {
            if (res.status !== 200) return;
            localStorage.setItem("user", JSON.stringify(res.data.user));
            localStorage.setItem("token", JSON.stringify(res.data.token));
            localStorage.setItem("isAuth", true);
            history.push("/student/set-profile");
            setLoading(false);
          })
          .catch((err) => {
            history.push("/student/signup");
          });
      })
      .catch((err) => {
        console.log("ada", err);
        toast.error(err.response.data.message);
        setLoading(false);
      });
  };

  const signUp = useSelector((state) => state.student);

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
            <section className={styles.parent}>
              <div className="container my-5">
                <ArrowBackIcon
                  fontSize="large"
                  className="btn p-0 m-0"
                  onClick={() => handleBack()}
                />
              </div>
              <div className={styles.signupForm}>
                <h1 className="text-center">Sign Up</h1>
                <div>
                  <TextField
                    id="outlined-basic"
                    onChange={(e) =>
                      setStudent({
                        ...student,
                        studentClgEmail: e.target.value,
                      })
                    }
                    label="Email"
                    margin="normal"
                    fullWidth
                    variant="outlined"
                  />
                </div>
                <div>
                  <TextField
                    id="outlined-basic"
                    onChange={(e) =>
                      setStudent({ ...student, studentClgCode: e.target.value })
                    }
                    label="Code"
                    fullWidth
                    margin="normal"
                    variant="outlined"
                  />
                </div>
                <div>
                  <TextField
                    id="outlined-basic"
                    onChange={(e) =>
                      setStudent({ ...student, password: e.target.value })
                    }
                    label="Password"
                    fullWidth
                    margin="normal"
                    type="password"
                    variant="outlined"
                  />
                </div>
                <div>
                  <TextField
                    id="outlined-basic"
                    onChange={(e) =>
                      setStudent({ ...student, confPassword: e.target.value })
                    }
                    label="Confirm Password"
                    fullWidth
                    type="password"
                    margin="normal"
                    variant="outlined"
                  />
                </div>
                <Button
                  disabled={loading}
                  variant="contained"
                  fullWidth
                  type="submit"
                  size="large"
                  onClick={handleSubmit}
                >
                  Sign Up
                </Button>
                <div className="text-center my-5">
                  Already have account? <Link to="/student/signin">Signin</Link>
                </div>
                <Toaster position="top-right" reverseOrder={false} />
              </div>
            </section>
          </div>
          <div className="col-6">
            <div
              className="d-flex align-items-center justify-content-center"
              style={{ height: "100vh" }}
            >
              <img className="img-fluid" src="/Images/signupGif.gif" alt="" />
            </div>
          </div>
        </div>
      </div>
    </Dialog>
  );
}
