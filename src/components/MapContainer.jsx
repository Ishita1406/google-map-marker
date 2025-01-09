import React from "react";
import { GoogleMap } from "@react-google-maps/api";
import MarkerInfo from "./MarkerInfo";

const containerStyle = { width: "100%", height: "400px" };

const MapContainer = ({ coordinates }) => {
  const center = { lat: 37.0902, lng: -95.7129 };

  return (
    <div className="w-full flex justify-center mt-6">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={4}>
      {coordinates.map((coord, index) => (
          <MarkerInfo key={index} position={{ lat: coord.latitude, lng: coord.longitude }} />
        ))}
      </GoogleMap>
    </div>
  );
};

export default MapContainer;
