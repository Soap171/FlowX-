import React from "react";
import floodIcon from "../assets/flood.png";
import RainIcon from "../assets/rain.png";
import RiverIcon from "../assets/river.png";

function RealTimeFloodAnalysis() {
  return (
    <section
      className="px-6 md:px-12 py-10 bg-white text-gray-900 flex justify-center"
      id="real-time-flood-analysis"
    >
      <div className="w-full max-w-3xl">
        <h2 className="text-2xl font-bold text-center flex items-center justify-center gap-2">
          <img src={floodIcon} alt="Flood Icon" className="w-8 h-8" />
          REAL-TIME FLOOD ANALYSIS
        </h2>
        <div className="mt-6 bg-gray-100 p-6 rounded-lg shadow-md">
          <p className="font-semibold flex items-center gap-2">
            <img src={floodIcon} alt="Flood Risk" className="w-6 h-6" />
            Flood Risk
          </p>
          <div className="w-full bg-gray-300 rounded-full h-4 mt-2">
            <div
              className="bg-blue-500 h-4 rounded-full"
              style={{ width: "39%" }}
            ></div>
          </div>
          <p className="mt-2 text-sm text-gray-600">39% to complete</p>
        </div>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-6 bg-gray-100 rounded-lg shadow-md text-center flex flex-col items-center">
            <img
              src={RiverIcon}
              alt="River Water Level"
              className="w-10 h-10 mb-2"
            />
            <p className="font-semibold">River Water Level</p>
            <p className="text-2xl font-bold">55°C</p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg shadow-md text-center flex flex-col items-center">
            <img
              src={RainIcon}
              alt="Today's Rainfall"
              className="w-10 h-10 mb-2"
            />
            <p className="font-semibold">Today's Rainfall</p>
            <p className="text-2xl font-bold">55°C</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RealTimeFloodAnalysis;
