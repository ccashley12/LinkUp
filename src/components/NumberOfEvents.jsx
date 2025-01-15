import React, { useState } from 'react';

const NumberOfEvents = ({ setCurrentNOE }) => {
  const [eventCount, setEventCount] = useState(32);

  const handleInputChange = (e) => {
    const value = e.target.value;
    if (!isNaN(value) && value >= 0) {
      setEventCount(value); 
      setCurrentNOE(parseInt(value, 10)); 
    }
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