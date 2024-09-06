import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-pink-100 flex flex-col">
      {/* Navbar */}
      <header className="bg-gray-800 text-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <nav>
            <ul className="flex space-x-4">
              <li>
                <Link to="/dashboard" className="hover:underline text-pink-300">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  to="/historical-data"
                  className="hover:underline text-pink-300"
                >
                  Historical Data
                </Link>
              </li>
              <li>
                <Link to="/settings" className="hover:underline text-pink-300">
                  Settings
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      {/* Main Content */}
      <main className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Welcome to the Home Page</h1>
        <p className="text-lg">
          This is the home page for Women Safety Analytics.
        </p>
      </main>
    </div>
  );
};

export default Home;
