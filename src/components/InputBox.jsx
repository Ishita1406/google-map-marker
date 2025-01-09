import React, { useState } from 'react'

const InputBox = ({ onAddCoordinate }) => {

    const [latitude, setLatitude] = useState("");
      const [longitude, setLongitude] = useState("");
    
      const handleAdd = () => {
        if (!latitude || !longitude) {
          alert("Both latitude and longitude are required!");
          return;
        }
        onAddCoordinate(latitude, longitude);
        setLatitude("");
        setLongitude("");
      };



  return (
    <div className="flex flex-col space-y-4">
      <input
        type="number"
        placeholder="Latitude"
        value={latitude}
        onChange={(e) => setLatitude(e.target.value)}
        className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        type="number"
        placeholder="Longitude"
        value={longitude}
        onChange={(e) => setLongitude(e.target.value)}
        className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button onClick={handleAdd} className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200">
        Add Coordinate
      </button>
    </div>
  )
}

export default InputBox