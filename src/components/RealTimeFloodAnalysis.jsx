import React, { useEffect, useState } from "react";
import floodIcon from "../assets/flood.png";
import RainIcon from "../assets/rain.png";
import RiverIcon from "../assets/river.png";
import supabase from "../lib/supabaseClient";
import axioInstance from "../lib/axioInstance";

function RealTimeFloodAnalysis() {
  const [floodData, setFloodData] = useState(null);
  const [floodRisk, setFloodRisk] = useState(0);

  useEffect(() => {
    const getData = async () => {
      try {
        let { data: flood_data, error } = await supabase
          .from("flood_data")
          .select("*")
          .order("date", { ascending: false })
          .limit(1);

        if (error) {
          console.error("Error fetching flood data:", error);
        } else {
          console.log("Raw flood data:", flood_data);

          const processedData = flood_data.map((item) => {
            const date = new Date(item.date);
            const month = date.getMonth() + 1;
            return { ...item, month };
          });

          setFloodData(processedData[0]);
          console.log("Processed Flood data with month:", processedData[0]);

          try {
            const response = await axioInstance.post("/flood_percentage_rf", {
              features: [
                processedData[0].month,
                processedData[0].rain_fall,
                processedData[0].river_level,
              ],
            });

            console.log("POST request response:", response.data);

            // Extracting the percentage correctly
            if (
              response.data &&
              response.data.prediction &&
              Array.isArray(response.data.prediction) &&
              response.data.prediction.length > 0
            ) {
              const percentage = response.data.prediction[0] * 100;
              console.log(
                "Flood risk percentage:",
                percentage.toFixed(2) + "%"
              );
              // Update the floodRisk state with the percentage value
              setFloodRisk(parseFloat(percentage.toFixed(2)));
            } else {
              console.warn("Unexpected response format:", response.data);
            }
          } catch (postError) {
            console.error("Error sending POST request:", postError);
          }
        }
      } catch (error) {
        console.error("Error fetching flood data:", error);
      }
    };

    getData();
  }, []);

  // Determine the bar color based on percentage
  const getBarColor = (percentage) => {
    if (percentage <= 40) return "bg-green-500";
    if (percentage <= 70) return "bg-yellow-500";
    return "bg-red-500";
  };

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
              className={`${getBarColor(floodRisk)} h-4 rounded-full`}
              style={{ width: `${floodRisk}%` }}
            ></div>
          </div>
          <p className="mt-2 text-sm text-gray-600">
            {floodRisk}% risk detected
          </p>
        </div>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-6 bg-gray-100 rounded-lg shadow-md text-center flex flex-col items-center">
            <img
              src={RiverIcon}
              alt="River Water Level"
              className="w-10 h-10 mb-2"
            />
            <p className="font-semibold">River Level</p>
            <p className="text-2xl font-bold">{floodData?.river_level} M</p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg shadow-md text-center flex flex-col items-center">
            <img
              src={RainIcon}
              alt="Today's Rainfall"
              className="w-10 h-10 mb-2"
            />
            <p className="font-semibold">Today's Rainfall</p>
            <p className="text-2xl font-bold">{floodData?.rain_fall} MM</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RealTimeFloodAnalysis;
