import React from "react";
import RealTimeMonitoring from "./RealTimeMonitoring";
import GenderDistribution from "./GenderDistribution";
import Alerts from "./Alerts";

const Dashboard = () => {
  return (
    <section id="dashboard" className="mb-8">
      <h2 className="text-xl font-bold mb-4">Dashboard</h2>
      <RealTimeMonitoring />
      <GenderDistribution />
      <Alerts />
    </section>
  );
};

export default Dashboard;
