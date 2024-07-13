import { useState, useCallback } from 'react';

const useCurrentLocation = () => {
    const [location, setLocation] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const getLocation = useCallback(() => {
        console.log("Attempting to get location...");
        if (!navigator.geolocation) {
            setError(new Error("Geolocation is not supported by this browser"));
            console.log("Geolocation not supported");
            return;
        }

        setLoading(true);
        setError(null);

        navigator.geolocation.getCurrentPosition(
            (position) => {
                console.log("Position obtained:", position);
                setLocation({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                });
                setLoading(false);
            },
            (err) => {
                console.log("Error obtaining position:", err);
                setError(err);
                setLoading(false);
            }
        );
    }, []);

    return { location, loading, error, getLocation };
};

export default useCurrentLocation;