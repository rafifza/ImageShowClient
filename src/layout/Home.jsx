import React from "react";
import Navbar from "../components/Navbar";
import Dashboard from "../components/Dashboard";

function Home() {
  return (
    <div className="Home">
      <Navbar />
      <div className="body">
        <Dashboard />
      </div>
    </div>
  );
}
export default Home;
