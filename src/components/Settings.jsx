import React from "react";

const Settings = () => {
  return (
    <section id="settings" className="mb-8">
      <h2 className="text-xl font-bold mb-4">Settings</h2>
      <form className="space-y-4">
        <div>
          <label className="block mb-1">Alert Sensitivity:</label>
          <input type="range" min="1" max="10" className="w-full" />
        </div>
        <div>
          <label className="block mb-1">Notification Preferences:</label>
          <select className="w-full border p-2">
            <option>Email</option>
            <option>SMS</option>
            <option>Push Notification</option>
          </select>
        </div>
        {/* More settings */}
      </form>
    </section>
  );
};

export default Settings;
