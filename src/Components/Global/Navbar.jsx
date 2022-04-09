import React, { useState } from "react";
import { Link } from "react-router-dom";
import { axiosConfig } from "../../utils/axiosConfig";
import { studentSignOut } from "../../utils/api";
import toast, { Toaster } from "react-hot-toast";
import { useHistory, useLocation } from "react-router-dom";

import { Avatar, Button, Popover, Typography } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import NotificationsIcon from "@mui/icons-material/Notifications";

import styles from "./Navbar.module.scss";

export default function Navbar({ isAuth }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const location = useLocation();

  const type = location.pathname.split("/")[1];

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const handleSignOut = () => {
    setLoading(true);
    axiosConfig
      .get(studentSignOut)
      .then((res) => {
        if (res.status !== 200) throw Error;
        localStorage.clear();
        toast.success("Sign Out Successfull");
        history.push("/");
        window.location.reload(false);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        toast.error("There was an error");
      });
  };

  const handleCollegeSignOut = (e) => {
    e.preventDefault();
    setLoading(true);

    axiosConfig
      .get("/college/signout")
      .then((res) => {
        if (res.status !== 200) return;
        localStorage.clear();
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

  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className={styles.parent}>
      {type === "college" ? (
        <>
          <nav className={" navbar navbar-expand-lg navbar-dark px-4  py-2"}>
            <a className="navbar-brand fw-bold" href="#">
              Don't Go Depresso
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse justify-content-center"
              id="navbarNavAltMarkup"
            >
              <div className="navbar-nav">
                <Link
                  className="nav-item nav-link mx-2"
                  to="/college/add-emails"
                >
                  Add Students
                </Link>
                <Link
                  className="nav-item nav-link mx-2"
                  to="/college/add-emails"
                >
                  Add Students
                </Link>
                <Link
                  className="nav-item nav-link mx-2"
                  to="/college/add-emails"
                >
                  Add Students
                </Link>
              </div>
            </div>
            {isAuth ? (
              <div className="d-flex align-items-center">
                <div className="d-flex align-items-center">
                  {/* <Avatar
                    alt="Cindy Baker"
                    src="https://i.pinimg.com/236x/07/33/ba/0733ba760b29378474dea0fdbcb97107.jpg"
                  />
                  <p className="ms-3 me-2 mb-0 text-light">
                    {user.studentName}
                  </p> */}

                  <Typography sx={{ px: 2 }}>
                    <button
                      disabled={loading}
                      onClick={handleCollegeSignOut}
                      className="btn"
                    >
                      Sign Out
                    </button>
                  </Typography>
                </div>
              </div>
            ) : (
              <>
                <Link to="/student/signin">
                  <div className={styles.loginBtn}>Signin</div>
                </Link>
              </>
            )}
          </nav>
        </>
      ) : type === "counsellor" ? (
        "counsellor"
      ) : (
        <nav className={" navbar navbar-expand-lg navbar-dark px-4  py-2"}>
          <a className="navbar-brand fw-bold" href="#">
            Don't Go Depresso
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav">
              <Link className="nav-item nav-link mx-2" to="/">
                Home
              </Link>
              <Link className="nav-item nav-link mx-2" to="/blogs">
                Blogs
              </Link>
              <Link className="nav-item nav-link mx-2" to="/quotes">
                Quotes
              </Link>
              <a className="nav-item nav-link mx-2" href="#">
                Videos
              </a>
              <Link className="nav-item nav-link mx-2" to="/">
                About Us
              </Link>
              <a className="nav-item nav-link mx-2" href="#">
                Contact Us
              </a>
            </div>
          </div>
          {isAuth ? (
            <div className="d-flex align-items-center">
              <div className="d-flex align-items-center">
                <Avatar
                  alt="Cindy Baker"
                  src="https://i.pinimg.com/236x/07/33/ba/0733ba760b29378474dea0fdbcb97107.jpg"
                />
                <p className="ms-3 me-2 mb-0 text-light">
                  {user ? user.studentName : ""}
                </p>
                <span className="btn" onClick={handleClick}>
                  <KeyboardArrowDownIcon style={{ color: "#fff" }} />
                </span>
                <Popover
                  id={id}
                  open={open}
                  anchorEl={anchorEl}
                  onClose={handleClose}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "center",
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "center",
                  }}
                >
                  <Typography sx={{ px: 2 }}>
                    <div className="btn">
                      <Link className="text-dark" to="/student/dashboard">
                        Dashboard
                      </Link>
                    </div>
                  </Typography>
                  <Typography sx={{ px: 2 }}>
                    <div className="btn">
                      <Link className="text-dark" to="/student/view-profile">
                        Profile
                      </Link>
                    </div>
                  </Typography>
                  <Typography sx={{ px: 2 }}>
                    <button
                      disabled={loading}
                      onClick={handleSignOut}
                      className="btn"
                    >
                      Sign Out
                    </button>
                  </Typography>
                </Popover>
              </div>
            </div>
          ) : (
            <>
              <Link to="/student/signin">
                <div className={styles.loginBtn}>Signin</div>
              </Link>
            </>
          )}
        </nav>
      )}
      <Toaster position="top-right" />
    </div>
  );
}
