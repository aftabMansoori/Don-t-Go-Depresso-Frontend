import React from "react";
import { Link } from "react-router-dom";

import Avatar from "@mui/material/Avatar";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import NotificationsIcon from "@mui/icons-material/Notifications";

import styles from "./Navbar.module.scss";

export default function Navbar() {
  return (
    <div className="bg-dark ">
      <nav
        className={
          styles.parent +
          " navbar navbar-expand-lg navbar-dark bg-dark container py-3"
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
            <a className="nav-item nav-link mx-2" href="#">
              Blogs
            </a>
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
        <div className="mx-3">
          <span className="mx-3">
            <NotificationsIcon color="secondary" />
          </span>
        </div>
        <div className="d-flex align-items-center">
          <Avatar
            alt="Cindy Baker"
            src="https://i.pinimg.com/236x/07/33/ba/0733ba760b29378474dea0fdbcb97107.jpg"
          />
          <p className="mx-3 mb-0 text-light">Terry B. Han</p>
          <span>
            <KeyboardArrowDownIcon color="secondary" />
          </span>
        </div>
      </nav>
    </div>
  );
}
