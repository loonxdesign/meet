import { useState } from 'react';
import { Spinner } from 'react-bootstrap'; // Import the Spinner component

const NumberOfEvents = ({ setCurrentNOE, setErrorAlert }) => {
  const [numEvents, setNumEvents] = useState('32');
  const [isLoading, setIsLoading] = useState(false); // State to track loading state

  const handleInputChanged = (event) => {
    const value = event.target.value;
    setNumEvents(value);

    let infoText;
    if (isNaN(value) || value <= 0) {
      infoText = 'Only positive numbers are allowed';
    } else {
      infoText = '';
      setIsLoading(true); // Set isLoading to true when starting the action
      setCurrentNOE(value);
    }
    setIsLoading(false); // Set isLoading back to false when the action is completed
    setErrorAlert(infoText);
  };

  return (
    <div id="number-of-events">
      <label htmlFor="number-of-events-input">Number of Events: </label>
      <input
        type="text"
        className="number-of-events-input"
        value={numEvents}
        onChange={handleInputChanged}
      />
      {isLoading && <Spinner animation="border" />}{' '}
      {/* Render spinner when loading */}
    </div>
  );
};

export default NumberOfEvents;
