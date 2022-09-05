import React from "react";
import "./App.css";
import Navbar from "./Navbar.jsx";
import IslandArea from "./IslandArea.jsx";
import Footer from "./Footer.jsx";

export default function App() {
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
