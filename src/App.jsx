import React from "react";
import "./App.css";
import Navbar from "./Navbar.jsx";
import Sidebar from "./Sidebar.jsx";
import Adminbar from "./Adminbar.jsx";
import IslandArea from "./IslandArea.jsx";
import Footer from "./Footer.jsx";
import {useState} from "react";

export default function App() {

  const [sidebar,setSidebar] = useState(false);
  const [adminbar,setAdminbar] = useState(false);
  const [running,setRunning] =useState(false);

  const handleStartButton = () => {
    console.log("BUTTON START PRESSED");
  } 

  const handlePlusButton = () => {
    console.log("BUTTON PLUS PRESSED");
  } 

  const handleCloneButton = () => {
    setSidebar( !sidebar);
    console.log("BUTTON CLONE PRESSED");
  } 

  const handleStepsButton = () => {
    console.log("BUTTON STEPS PRESSED");
  } 

  const handleAdminButton = () => {
    if (sidebar) {
      setSidebar(false);
    } 
    setAdminbar(!adminbar);
    console.log("BUTTON ADMIN PRESSED");
  } 

  const handleCloseButton = () => {
    setSidebar(false);
    setAdminbar(false);
    console.log("BUTTON CLOSE PRESSED");
  } 

  return (
    <div className="App">
      <Sidebar onCloseButton={handleCloseButton} sidebar={sidebar}/>
      <Adminbar onCloseButton={handleCloseButton} adminbar={adminbar}/>
      <Navbar onStartButton={handleStartButton} onPlusButton={handlePlusButton} onCloneButton={handleCloneButton} onStepsButton={handleStepsButton} onAdminButton={handleAdminButton} />
      <div className="WorkArea">
        <IslandArea />
        <Footer />
      </div>
    </div>
  );
}
