import React, { useState } from "react";

//Components
import Profile from "../../../Components/Student/Profile/Profile";
import AllResponses from "../../../Components/Student/Quiz/AllResponses";

import styles from "./StudentProfile.module.scss";

export default function ViewProfile() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      id: 0,
      label: "My Profile",
    },
    {
      id: 1,
      label: "My Responses",
    },
  ];

  return (
    <div className="container mt-5">
      <div className="row m-0">
        <div className="col-3">
          <div className="mt-5">
            {tabs.map((tab, i) =>
              tab.id === activeTab ? (
                <>
                  <p className={styles.activeTab}>{tab.label}</p>
                </>
              ) : (
                <p className={styles.tab} onClick={() => setActiveTab(tab.id)}>
                  {tab.label}
                </p>
              )
            )}
          </div>
        </div>
        <div className="col-8">
          {activeTab === 0 ? <Profile /> : <AllResponses />}
        </div>
      </div>
    </div>
  );
}
