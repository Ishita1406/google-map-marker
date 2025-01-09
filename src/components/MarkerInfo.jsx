import React, { useState, useEffect } from "react";
import { Marker, InfoWindow } from "@react-google-maps/api";
import axios from "axios";

const MarkerInfo = ({ position }) => {
  const [info, setInfo] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!position || typeof position.lat !== "number" || typeof position.lng !== "number") {
      setError("Invalid position object");
      return;
    }

    const fetchLocation = async () => {
      try {
        const apiKey = import.meta.env.VITE_API_KEY;
        if (!apiKey) {
          setError("Google Maps API key is missing!");
          return;
        }

        const response = await axios.get(
          `https://maps.googleapis.com/maps/api/geocode/json?latlng=${position.lat},${position.lng}&region=us&key=${apiKey}`
        );

        if (response.data.status !== "OK") {
          setError("Error fetching geocoding data");
          return;
        }

        const locationData = response.data.results[0];
        console.log(locationData);
        

        const city = locationData?.address_components.find((comp) =>
            comp.types.includes("locality")
          )?.long_name || locationData?.address_components.find((comp) =>
            comp.types.includes("neighborhood")
          )?.long_name;

        const state = locationData?.address_components.find((comp) =>
          comp.types.includes("administrative_area_level_1")
        )?.long_name;

        const country = locationData?.address_components.find((comp) => 
          comp.types.includes("country")
        )?.long_name;
        if (country !== "United States") {
            setError("Location is not in the United States!");
            return;
        }

        setError(null);
        setInfo({ city: city || "Unknown", state: state || "Unknown" });
      } catch (error) {
        setError("Error fetching geocoding data");
      }
    };

    fetchLocation();
  }, [position]);

  if (!position || typeof position.lat !== "number" || typeof position.lng !== "number") {
    return null;
  }
  
  return (
    <>
        {error && (
            <p className="text-red-500 font-medium">{error}</p>
        )}
      <Marker position={position}  />
      {info && (
        <InfoWindow position={position} >
          <div className="p-0 bg-white rounded shadow-lg">            
            <p className=" text-gray-800 font-medium">City: {info.city}</p>
            <p className="text-gray-700 font-medium">State: {info.state}</p>
          </div>
        </InfoWindow>
      )}
    </>
  );
};

export default MarkerInfo;
