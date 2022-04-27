import React, { useState, useEffect } from "react";
import { axiosConfig } from "../../../utils/axiosConfig";
import { getAppointments } from "../../../utils/api";

//Components
import Appointments from "../../../Components/Student/Appointments/Appointments";
import ScheduleDialog from "../../../Components/Student/Schedule/ScheduleDialog";

export default function StudentDashboard() {
  const [open, setOpen] = useState(false);
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    handleAppointments();
  }, []);

  const handleAppointments = () => {
    setLoading(false);
    axiosConfig
      .get(getAppointments)
      .then((res) => {
        if (res.status !== 200) return;
        let result = res.data.scheduledList;
        result.reverse();
        setAppointments(result);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.log("ada", err.message);
      });
  };

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <div className="container">
        <div className="my-5 d-flex justify-content-between">
          <h3>Appointments</h3>
          <div>
            <button className="btn btn-success" onClick={handleClick}>
              Schedule
            </button>
          </div>
        </div>

        <ScheduleDialog
          open={open}
          handleAppointments={handleAppointments}
          handleClick={handleClick}
        />

        <Appointments appointments={appointments} loading={loading} />
      </div>
    </>
  );
}
