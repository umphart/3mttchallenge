import React, { useState, useEffect } from 'react';

const ThreatAlerts = () => {
  const [alerts, setAlerts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAlerts = async () => {
      try {
        const response = await fetch('https://api.cyber-alerts.ng'); // Example API
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setAlerts(data);
      } catch (error) {
        setError('Failed to fetch threat alerts');
      }
    };

    fetchAlerts();
  }, []);

  return (
    <div>
      <h2>Real-time Threat Alerts</h2>
      {error ? <p>{error}</p> : 
        <ul>
          {alerts.map((alert, index) => (
            <li key={index}>{alert.message}</li>
          ))}
        </ul>}
    </div>
  );
};

export default ThreatAlerts;