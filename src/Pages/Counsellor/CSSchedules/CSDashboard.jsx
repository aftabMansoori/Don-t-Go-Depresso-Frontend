import React, { useEffect, useState } from "react";
import { useLocation, useHistory } from "react-router-dom";

import styles from "./CSDashboard.module.scss";

//Components
import Scheduled from "../../../Components/Counsellor/Scheduled/Scheduled";
import Appointment from "../../../Components/Counsellor/Appointments/Appointment";
import History from "../../../Components/Counsellor/History/History";

export default function CSSchedules() {
  const location = useLocation();
  const history = useHistory();

  const [activeTab, setActiveTab] = useState(1);

  useEffect(() => {
    location.search === "?p=appointments"
      ? setActiveTab(2)
      : location.search === "?p=history"
      ? setActiveTab(3)
      : setActiveTab(1);
  }, [location.search]);

  return (
    <>
      <div className="container">
        <div className="my-3 d-flex align-items-center justify-content-end">
          <div
            className="mx-3 btn p-0"
            onClick={() => history.push({ search: "?p=scheduled" })}
          >
            Scheduled
          </div>
          <div
            className="mx-3 btn p-0"
            onClick={() => history.push({ search: "?p=appointments" })}
          >
            Appointments
          </div>
          <div
            className="mx-3 btn p-0"
            onClick={() => history.push({ search: "?p=history" })}
          >
            History
          </div>
        </div>
        {activeTab === 1 && (
          <>
            <Scheduled />
          </>
        )}
        {activeTab === 2 && (
          <>
            <Appointment />
          </>
        )}
        {activeTab === 3 && (
          <>
            <History />
          </>
        )}
      </div>
    </>
  );
}
