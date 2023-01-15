import { faHeart, faMessage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Header from "../header/Header";

import "./JobPage.css";

function JobPage() {
  const jobInfo = JSON.parse(localStorage.getItem("job"));

  return (
    <>
      <Header />
      <div className="job-page">
        <div className="job-info">
          <h2>{jobInfo.title}</h2>
          <p>{jobInfo.description}</p>
          <span>{jobInfo.budget}</span>
        </div>
        <div className="customer-info">
          <h2>Client Info</h2>
          <img src={jobInfo.customer.image} alt={jobInfo.customer.username} />
          <h3>{jobInfo.customer.username}</h3>
          <h4>{jobInfo.customer.location}</h4>
          <div className="call-action" style={{margin: "0 auto"}}>
              <FontAwesomeIcon icon={faHeart} className="action-icon" />
              <FontAwesomeIcon icon={faMessage} className=" action-icon" />
            </div>
        </div>
      </div>
    </>
  );
}

export default JobPage;
