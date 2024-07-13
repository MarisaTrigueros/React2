import React from 'react';
import useCurrentLocation from './userCurrentLocation';

const LocationComponent = () => {
    const { location, loading, error, getLocation } = useCurrentLocation();

    return (
        <div>
            <button onClick={getLocation}>Get Location</button>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error.message}</p>}
            {location && (
                <div>
                    <p>Latitude: {location.latitude}</p>
                    <p>Longitude: {location.longitude}</p>
                </div>
            )}
        </div>
    );
};

export default LocationComponent;