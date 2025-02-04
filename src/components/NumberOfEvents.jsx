import React, { useState } from 'react';

const NumberOfEvents = ({ setCurrentNOE, setErrorAlert }) => {
  const [eventCount, setEventCount] = useState(32);

  const handleInputChange = (e) => {
    const value = e.target.value;
    if (!isNaN(value) && value >= 0) {
      setEventCount(value); 
      setCurrentNOE(parseInt(value, 10)); 
    }

    let infoText;
        if (e.target.value <= 0) {
            infoText = "Only a positive number is allowed"
        } else {
            infoText = ""
        }
        setErrorAlert(infoText);

  };

  return (
    <div id="number-of-events">
      <label htmlFor="event-count">Number of Events:</label>
      <input
        id="event-count"
        type="number"
        value={eventCount}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default NumberOfEvents;