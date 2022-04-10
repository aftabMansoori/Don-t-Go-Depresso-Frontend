import React, { useState } from "react";

//Compoennts
import AddCounsellor from "../../../Components/College/Counsellor/AddCounsellor";

import styled from "styled-components";

export default function Counsellor() {
  const [activeTab, setActiveTab] = useState(1);

  const tabs = [
    {
      id: 1,
      label: "Add Counsellor",
    },
    {
      id: 2,
      label: "Counsellor",
    },
  ];

  return (
    <>
      <div className="container my-4">
        <div className="row">
          <div
            className="col-2 my-4 text-center"
            // style={{ height: "60vh" }}
          >
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
          <div className="col-8">
            {activeTab === 1 ? <AddCounsellor /> : ""}
          </div>
        </div>
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
