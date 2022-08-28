import React from "react";
import "./app.css";
import Navbar from "./Navbar.jsx";
import IslandArea from "./IslandArea.jsx";
import Footer from "./Footer.jsx";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="WorkArea">
        <IslandArea />
        <Footer />
      </div>
    </div>
  );
}
