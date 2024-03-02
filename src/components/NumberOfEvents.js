import { useState } from 'react';
import { Spinner } from 'react-bootstrap'; // Import the Spinner component
import 'bootstrap/dist/css/bootstrap.css';

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
    <div className="mt-2" id="number-of-events">
      <label id="noe-label" className="me-2" htmlFor="number-of-events-input">Number of Events: </label>
      <input
        type="number"
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
