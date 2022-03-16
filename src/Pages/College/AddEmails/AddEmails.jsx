import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import toast, { Toaster } from "react-hot-toast";
import { axiosConfig } from "../../../utils/axiosConfig";

import styles from "./AddEmails.module.scss";

export default function AddEmails() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [file, setFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    let studentMail = email;
    axiosConfig
      .post("/college/add-mails", { studentMail })
      .then((res) => {
        if (res.status !== 201) return;
        toast.success(res.data.message);
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

  return (
    <>
      <section className={styles.parent}>
        <div className={styles.addEmailForm}>
          <h1 className="text-center">Add Email</h1>
          <div className="d-flex align-items-center justify-content-center">
            <TextField
              id="outlined-basic"
              label="Email"
              margin="normal"
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              disabled={loading}
              onClick={handleSubmit}
              className="btn btn-primary mx-3"
            >
              Add
            </button>
          </div>
        </div>
        <hr />
        <div>
          <h1>Add email in bulk</h1>
          <div className="mt-4 mb-4 d-flex align-items-center justify-content-around">
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
                <span className="mx-1 btn" onClick={() => setFile(null)}>
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
        <Toaster position="top-right" reverseOrder={false} />
      </section>
    </>
  );
}
