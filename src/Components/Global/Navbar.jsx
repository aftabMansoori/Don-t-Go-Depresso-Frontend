import React, { useState } from "react";
import { Link } from "react-router-dom";
import { axiosConfig } from "../../utils/axiosConfig";
import { studentSignOut } from "../../utils/api";
import toast, { Toaster } from "react-hot-toast";
import { useHistory } from "react-router-dom";

import { Avatar, Button, Popover, Typography } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import NotificationsIcon from "@mui/icons-material/Notifications";

import styles from "./Navbar.module.scss";

export default function Navbar({ isAuth }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [loading, setLoading] = useState(false);
  const history = useHistory();

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

  // console.log("ada", isAuth);

  return (
    <div className={styles.parent + " bg-light"}>
      <nav
        className={
          " navbar navbar-expand-lg navbar-light bg-light container  py-3"
        }
      >
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
            <div className="mx-3">
              <span className="mx-3">
                <NotificationsIcon />
              </span>
            </div>
            <div className="d-flex align-items-center">
              <Avatar
                alt="Cindy Baker"
                src="https://i.pinimg.com/236x/07/33/ba/0733ba760b29378474dea0fdbcb97107.jpg"
              />
              <p className="mx-3 mb-0 text-dark ">Terry B. Han</p>
              <span className="btn" onClick={handleClick}>
                <KeyboardArrowDownIcon />
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
                  <div className="btn">Profile</div>
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
              <div className={styles.loginBtn}>Login</div>
            </Link>
          </>
        )}
      </nav>
      <Toaster position="top-right" />
    </div>
  );
}
