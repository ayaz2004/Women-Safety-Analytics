import React from "react";

const HistoricalData = () => {
  return (
    <section id="historical-data" className="mb-8">
      <h2 className="text-xl font-bold mb-4">Historical Data</h2>
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-2">Hotspots Map</h3>
        <div className="border p-4">
          {/* Placeholder for map */}
          <img src="path/to/map" alt="Hotspots Map" className="w-full" />
        </div>
      </div>
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-2">Trends Graph</h3>
        <div className="border p-4">
          {/* Placeholder for graph */}
          <img src="path/to/graph" alt="Trends Graph" className="w-full" />
        </div>
      </div>
    </section>
  );
};

export default HistoricalData;
