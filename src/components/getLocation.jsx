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