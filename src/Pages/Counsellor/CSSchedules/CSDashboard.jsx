import React, { useEffect, useState } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { getAppointmentCS } from "../../../utils/api";
import { axiosConfig } from "../../../utils/axiosConfig";

import styles from "./CSDashboard.module.scss";

//Components
import Scheduled from "../../../Components/Counsellor/Scheduled/Scheduled";
import Appointment from "../../../Components/Counsellor/Appointments/Appointment";
import History from "../../../Components/Counsellor/History/History";

export default function CSSchedules() {
  const location = useLocation();
  const history = useHistory();

  const [activeTab, setActiveTab] = useState(1);
  const [loading, setLoading] = useState(false);
  const [pastAppointments, setPastAppointments] = useState([]);
  const [appointments, setAppointments] = useState([]);
  const [scheduled, setScheduled] = useState([]);

  useEffect(() => {
    location.search === "?p=appointments"
      ? setActiveTab(2)
      : location.search === "?p=history"
      ? setActiveTab(3)
      : setActiveTab(1);
  }, [location.search]);

  useEffect(() => {
    appointmentHandler();
  }, []);

  const appointmentHandler = () => {
    setLoading(false);

    axiosConfig
      .get(getAppointmentCS)
      .then((res) => {
        if (res.status !== 200) return;
        setAppointments(res.data.scheduledList[0].appointment);
        setScheduled(res.data.scheduledList[0].scheduled);
        setPastAppointments(res.data.scheduledList[0].history);
        setLoading(false);
      })
      .catch((err) => {
        console.log("ada", err.message);
        setLoading(false);
      });
  };

  return (
    <>
      <div className="container">
        {activeTab === 1 && (
          <>
            <Scheduled loading={loading} scheduled={scheduled} />
          </>
        )}
        {activeTab === 2 && (
          <>
            <Appointment loading={loading} appointments={appointments} />
          </>
        )}
        {activeTab === 3 && (
          <>
            <History loading={loading} history={pastAppointments} />
          </>
        )}
      </div>
    </>
  );
}
