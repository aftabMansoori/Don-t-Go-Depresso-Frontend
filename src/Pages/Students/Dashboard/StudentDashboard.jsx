import React, { useState } from "react";

//Components
import Appointments from "../../../Components/Student/Appointments/Appointments";
import ScheduleDialog from "../../../Components/Student/Schedule/ScheduleDialog";

export default function StudentDashboard() {
  const [open, setOpen] = useState(false);

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

        <ScheduleDialog open={open} handleClick={handleClick} />

        <Appointments />
      </div>
    </>
  );
}
