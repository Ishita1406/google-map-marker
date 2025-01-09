import React, { useState } from "react";
import MapContainer from "./components/MapContainer";
import { LoadScript } from "@react-google-maps/api";
import InputBox from "./components/InputBox";

const App = () => {
  const [coordinates, setCoordinates] = useState([]);

  const handleManualInput = (lat, lng) => {
    setCoordinates((prev) => [...prev, { latitude: parseFloat(lat), longitude: parseFloat(lng) }]);
  };


  return (
    <LoadScript googleMapsApiKey={import.meta.env.VITE_API_KEY} >
      <div className="flex flex-col items-center py-6 px-4">
      <h1 className="text-3xl font-semibold text-center mb-4">Google Maps Plugin</h1>
      <div className="w-full max-w-md p-4 bg-white rounded-lg shadow-md">
        <h3 className="text-xl font-medium mb-4">Enter Coordinates:</h3>
        <InputBox onAddCoordinate={handleManualInput} />
      </div>
      {coordinates.length > 0 ? (
        <MapContainer coordinates={coordinates} />
      ) : (
        <p className="mt-4 text-lg text-gray-600">Please add coordinates to see the map.</p>
      )}
    </div>
    </LoadScript>
  );
};

  

export default App;
