import React, { useState } from 'react';

const ERROR_MESSAGE = 'Failed to fetch ISS location. Please try again.';
import './location.css';


const Location = () => {
    const [issLocation, setIssLocation] = useState({ latitude: null, longitude: null });
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchLocation = async () => {
        setIsLoading(true);
        setError(null);
        try {
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), 10000); 
            const response = await fetch('https://api.open-notify.org/iss-now.json', { signal: controller.signal });
            clearTimeout(timeoutId);
            const data = await response.json();
            const { latitude, longitude } = data.iss_position;
            setIssLocation({ latitude, longitude });
        } catch (error) {
            setError(ERROR_MESSAGE);
        } finally {
            setIsLoading(false);
        }
        };

        return (
            <div className="location-container">
                <h1>Real Time Current Location</h1>
                {isLoading ? (
                    <p>Loading...</p>
                ) : (
                    <div>
                        <p>Latitude: {issLocation.latitude || '-5.7227729'}</p>
                        <p>Longitude: {issLocation.longitude || '-89.3307'}</p>
                    </div>
                )}
                {error && <div className="error-message">{error}</div>}
                <button className="btn btn-success" onClick={fetchLocation}>Enter</button>
            </div>
        );

};

export default Location;