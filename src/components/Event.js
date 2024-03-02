import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

const Event = ({ event }) => {
  const [showDetails, setShowDetails] = useState(false);
  return (
    <li className="event" key={event.id}>
      <div className="event-box-closed">
        <h2>{event.summary}</h2>
        <p>{event.created}</p>
        <p>{event.location}</p>
        <button
          className="showDetailsButton"
          onClick={() => setShowDetails(!showDetails)}
        >
          {showDetails ? 'Hide Details' : 'Show Details'}
        </button>
      </div>
      {showDetails ? (
        <div className="details">
          <h5>Event Details</h5>
          <p>{event.description}</p>
        </div>
      ) : null}
    </li>
  );
};

export default Event;
