import React, { useState } from "react";

const Event = ({ event }) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails)
  }

  return (
    <li className="eventSummary">
        <h2>{event.summary}</h2>
        <p>{event.location}</p>
        <p>{event.created}</p>
      <button className="details-btn" onClick={toggleDetails}>
          {showDetails ? "Hide Details" : "Show Details"}
      </button>
      {showDetails ? <div className="eventDetails">{event.description}</div> : null}
    </li>
  );
}
  
export default Event;