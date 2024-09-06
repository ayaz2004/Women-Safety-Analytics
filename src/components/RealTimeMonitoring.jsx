import React from "react";

const RealTimeMonitoring = () => {
  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold mb-2">Real-Time Monitoring</h3>
      <div className="border p-4">
        {/* Placeholder for video feed */}
        <video src="path/to/video" controls className="w-full"></video>
      </div>
    </div>
  );
};

export default RealTimeMonitoring;
