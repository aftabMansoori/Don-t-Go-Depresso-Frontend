import React, { useState, useEffect } from "react";
import { TextField, Button } from "@mui/material";
import toast, { Toaster } from "react-hot-toast";
import { axiosConfig } from "../../../utils/axiosConfig";

import styles from "./AddEmails.module.scss";
import styled from "styled-components";

//Material UI
import { PersonAdd } from "@mui/icons-material";

//Components
import StudentMails from "../../../Components/College/StudentMails/StudentMails";

export default function AddEmails() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [file, setFile] = useState(null);
  const [studentMails, setStudentMails] = useState([]);
  const [activeTab, setActiveTab] = useState(1);

  useEffect(() => {
    getAllMails();
  }, []);

  const getAllMails = () => {
    setLoading(true);

    axiosConfig
      .get("/college/get-emails")
      .then((res) => {
        if (res.status !== 200) return;
        setStudentMails(res.data.mails);
        console.log("ada", res.data.mails, studentMails);
        setLoading(false);
      })
      .catch((err) => {
        toast.error(err.response.data.message);
        setLoading(false);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    let studentMail = email;
    axiosConfig
      .post("/college/add-mails", { studentMail })
      .then((res) => {
        if (res.status !== 201) return;
        toast.success(res.data.message);
        getAllMails();
        setEmail("");
        setLoading(false);
      })
      .catch((err) => {
        // if (err.response.status)
        toast.error(err.response.data.message);
        setLoading(false);
      });
  };

  const handleBulkSubmit = (e) => {
    e.preventDefault();
    const form = new FormData();
    form.append("excel", file);
    axiosConfig
      .post("/college/addbulkmails", { form })
      .then((res) => {
        console.log("ada", res.data);
        setFile(null);
      })
      .catch((err) => {
        console.log("ada", err);
      });
  };

  const tabs = [
    {
      id: 1,
      label: "Add Student",
    },
    {
      id: 2,
      label: "Student Emails",
    },
  ];

  return (
    <>
      <div className="container my-4">
        <div className="row">
          <div className="col-2 my-4 text-center">
            {tabs.map((tab) =>
              activeTab === tab.id ? (
                <ActiveTab
                  className={" btn"}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.label}
                </ActiveTab>
              ) : (
                <p className={" btn"} onClick={() => setActiveTab(tab.id)}>
                  {tab.label}
                </p>
              )
            )}
          </div>
          <div className="col-8 my-4">
            {activeTab === 1 ? (
              <div className={styles.addEmailForm + " container"}>
                <div className="d-flex align-items-center justify-content-center">
                  <TextField
                    id="outlined-basic"
                    label="Email"
                    margin="normal"
                    variant="outlined"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    size="small"
                  />
                  <button
                    disabled={loading}
                    onClick={handleSubmit}
                    className="btn btn-primary mx-3 mb-2 p-2"
                  >
                    <PersonAdd />
                  </button>
                </div>
                <div>
                  <h4 className="text-center">OR</h4>
                  <div className="mt-4 mb-4 d-flex align-items-center justify-content-center">
                    <div className="p-0 d-flex align-items-center">
                      <input
                        type="file"
                        onChange={(e) => {
                          setFile(e.target.files[0]);
                          console.log("ada", e.target.files[0]);
                        }}
                        className="form-control"
                      />
                      {file && (
                        <span
                          className="mx-1 btn"
                          onClick={() => setFile(null)}
                        >
                          close
                        </span>
                      )}
                    </div>
                    <button
                      disabled={loading}
                      onClick={handleBulkSubmit}
                      className="btn btn-primary mx-3"
                    >
                      Add
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <StudentMails studentMails={studentMails} loading={loading} />
            )}
          </div>
        </div>

        <Toaster position="top-right" reverseOrder={false} />
      </div>
    </>
  );
}

const ActiveTab = styled.p`
  background: #614385; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #516395,
    #614385
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #516395,
    #614385
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  color: white;
  &:hover {
    color: white;
  }
`;
