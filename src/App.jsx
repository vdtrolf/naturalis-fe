import React from "react";
import "./App.css";
import Navbar from "./Navbar.jsx";
import Sidebar from "./Sidebar.jsx";
import Adminbar from "./Adminbar.jsx";
import IslandArea from "./IslandArea.jsx";
import Footer from "./Footer.jsx";
import {useState,useEffect} from "react";

export default function App() {

  const [sidebar,setSidebar] = useState(false);
  const [adminbar,setAdminbar] = useState(false);
  const [running,setRunning] =useState(false);
  const [island,setIsland] = useState({});

  useEffect(() => {
    var intervalId = 0;
    if (running) {
      if(island==={}) {
        const newIsland = getNewIsland();
        setIsland(newIsland);
      }
      intervalId = setInterval( () => {
        console.log("in interval " + intervalId + " for island " + island.id);
        const updatedIsland = refreshIsland(island);
        setIsland(updatedIsland);
      },2000)
      console.log("New interval " + intervalId);
    } else {
      console.log("Clearing interval " + intervalId);
      clearInterval(intervalId);
    }

    return () => {
      console.log("Ending interval " + intervalId);
      clearInterval(intervalId);
    }

  },[running,island]);

  // var island = {weather:"sun"};


  const handleStartButton = () => {
    setRunning(true)
    console.log("BUTTON START PRESSED");
  } 

  const handleStopButton = () => {
    setRunning(false)
    console.log("BUTTON START PRESSED");
  } 

  const handlePlusButton = () => {
    setRunning(true);
    setIsland({});
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

  const handleTileClick = (x,y) => {
    console.log("TILE CLICKED AT " + x + "/" + y);
  } 

  return (
    <div className="App">
      <Sidebar onCloseButton={handleCloseButton} sidebar={sidebar}/>
      <Adminbar onCloseButton={handleCloseButton} adminbar={adminbar}/>
      <Navbar running={running} onStartButton={handleStartButton} onStopButton={handleStopButton} onPlusButton={handlePlusButton} onCloneButton={handleCloneButton} onStepsButton={handleStepsButton} onAdminButton={handleAdminButton} />
      <div className="WorkArea">
        <IslandArea running={running} island={island} onTileClick={handleTileClick} />
        <Footer />
      </div>
    </div>
  );
}

const getNewIsland = () => {
  return {id:new Date().getTime() % 1000};
}

const refreshIsland = (island) => {

    switch (Math.floor(Math.random() * 4)) {
      case 0:
        return {...island,weather:"rain",tiles:[{key:0, num:0,var:"B",x:1,y:1},{key:1, num:3,var:"B",x:1,y:2},{key:2, num:4,var:"A",x:1,y:3},{key:3, num:11,var:"A",x:1,y:4}]};
      case 1:
        return {...island,weather:"sun",tiles:[{key:0, num:0,var:"B",x:1,y:1},{key:5, num:3,var:"B",x:1,y:2},{key:2, num:8,var:"A",x:1,y:3},{key:3, num:12,var:"A",x:1,y:4}]};
      case 2:
        return {...island,weather:"snow",tiles:[{key:0, num:14,var:"B",x:1,y:1},{key:1, num:7,var:"B",x:1,y:2},{key:2, num:10,var:"A",x:1,y:3},{key:3, num:13,var:"A",x:1,y:4}]};
      case 3:
        return {...island,weather:"cold",tiles:[{key:0, num:5,var:"B",x:1,y:1},{key:5, num:9,var:"B",x:1,y:2},{key:2, num:8,var:"A",x:1,y:3},{key:3, num:14,var:"A",x:1,y:4}]};
    }
}


