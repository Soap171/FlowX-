import React from "react";
import RainIcon from "../assets/rain.png";
import FloodIcon from "../assets/flood.png";
import SafeZoneIcon from "../assets/safezone.png";
import DurationIcon from "../assets/duration.png";

function FloodImpactPrediction() {
  return (
    <section
      className="px-6 md:px-12 py-10  text-gray-900 flex justify-center"
      id="flood-impact-prediction"
    >
      <div className="w-full max-w-7xl">
        <h2 className="text-2xl font-bold text-center flex items-center justify-center gap-2">
          <img src={FloodIcon} alt="Flood Icon" className="w-8 h-8" />
          FLOOD IMPACT PREDICTION
        </h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-6 bg-white rounded-lg shadow-md text-center flex flex-col items-center">
            <img src={RainIcon} alt="Flooded Area" className="w-10 h-10 mb-2" />
            <p className="font-semibold">Flooded Area</p>
            <p className="text-sm text-gray-600">
              Predicts the affected areas.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md text-center flex flex-col items-center">
            <img
              src={SafeZoneIcon}
              alt="Safe Zones"
              className="w-10 h-10 mb-2"
            />
            <p className="font-semibold">Safe Zones</p>
            <p className="text-sm text-gray-600">
              Indicates the safest locations.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md text-center flex flex-col items-center">
            <img
              src={DurationIcon}
              alt="Estimated Flood Duration"
              className="w-10 h-10 mb-2"
            />
            <p className="font-semibold">Estimated Flood Duration</p>
            <p className="text-sm text-gray-600">
              Predicts how long the flood will last.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md text-center flex flex-col items-center">
            <img
              src={DurationIcon}
              alt="Estimated Recovery Time"
              className="w-10 h-10 mb-2"
            />
            <p className="font-semibold">Estimated Recovery Time</p>
            <p className="text-sm text-gray-600">
              Provides an estimation of when normalcy returns.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FloodImpactPrediction;
