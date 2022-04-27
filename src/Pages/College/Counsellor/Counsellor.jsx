import React, { useState, useEffect } from "react";
import { axiosConfig } from "../../../utils/axiosConfig";
import { getClgCounsellor } from "../../../utils/api";

//Compoennts
import AddCounsellor from "../../../Components/College/Counsellor/AddCounsellor";
import CounsellorCard from "../../../Components/College/Counsellor/CounsellorCard";

import styled from "styled-components";

export default function Counsellor() {
  const [activeTab, setActiveTab] = useState(1);
  const [loading, setLoading] = useState(false);
  const [counsellors, setCounsellors] = useState([]);

  const tabs = [
    {
      id: 1,
      label: " Counsellor",
    },
    {
      id: 2,
      label: "Add Counsellor",
    },
  ];

  useEffect(() => {
    handleCounsellorList();
  }, []);

  const handleCounsellorList = () => {
    setLoading(false);

    axiosConfig
      .get(getClgCounsellor)
      .then((res) => {
        if (res.status !== 200) return;
        setCounsellors(res.data.counsellor);
        setLoading(false);
      })
      .catch((err) => {
        console.log("ada", err.message);
        setLoading(false);
      });
  };

  return (
    <>
      <div className="container my-4">
        <div className="row">
          <div className="col-2 my-4 text-center">
            {tabs.map((tab) =>
              activeTab === tab.id ? (
                <ActiveTab onClick={() => setActiveTab(tab.id)}>
                  {tab.label}
                </ActiveTab>
              ) : (
                <Tab onClick={() => setActiveTab(tab.id)}>{tab.label}</Tab>
              )
            )}
          </div>
          <div className="col-8">
            {activeTab === 2 ? (
              <AddCounsellor handleCounsellorList={handleCounsellorList} />
            ) : (
              <div className="container">
                {counsellors.length > 0 ? (
                  <CounsellorCard counsellors={counsellors} />
                ) : (
                  <NoData>
                    <img
                      src="/Images/noData.svg"
                      className="img-fluid"
                      alt=""
                    />
                    <h3>No Counsellor Added</h3>
                    <p>Please add counsellor to see the list of counsellors.</p>
                  </NoData>
                )}
              </div>
            )}
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
  padding: 8px 20px;
  margin: 10px;
  border-radius: 10px;
  cursor: pointer;
`;

const Tab = styled.p`
  padding: 8px 20px;
  margin: 10px;
  border-radius: 10px;
  cursor: pointer;
`;

const NoData = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 3rem 0 0 0;

  img {
    width: 350px;
  }

  h3 {
    margin: 3rem 0 0 0;
    color: rgb(108, 99, 255);
  }
`;
