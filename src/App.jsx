import React from "react";
import "./App.css";
import Navbar from "./Navbar.jsx";
import Sidebar from "./Sidebar.jsx";
import Adminbar from "./Adminbar.jsx";
import IslandArea from "./IslandArea.jsx";
import Footer from "./Footer.jsx";
import {useState,useEffect} from "react";

// const baseURL = "https://lub3kygki2.execute-api.us-east-1.amazonaws.com/Prod/";
// const baseURL = "http://64.227.64.163:8080/";
// const baseURL = "http://localhost:3001/";
// test 

export default function App() {

  const [sidebar,setSidebar] = useState(false);
  const [adminbar,setAdminbar] = useState(false);
  const [running,setRunning] =useState(false);
  const [island,setIsland] = useState({});
  const [baseURL,setBaseURL] = useState("https://lub3kygki2.execute-api.us-east-1.amazonaws.com/Prod/");

  useEffect(() => {
    var intervalId = 0;
    if (running) {
      if(!island.id) {
        getNewIsland(baseURL)
        .then((newIsland ) => setIsland(newIsland));
      }
      intervalId = setInterval( () => {
        // console.log("in interval " + intervalId + " for island " + island.id);
        refreshIsland(baseURL, island)
        .then((updatedIsland) => setIsland(updatedIsland));
      },2000)
      // console.log("New interval " + intervalId);
    } else {
      // console.log("Clearing interval " + intervalId);
      clearInterval(intervalId);
    }

    return () => {
      // console.log("Ending interval " + intervalId);
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

  const handlePenguinClick = (id) => {
    console.log("PENGUIN CLICKED :  " + id);
  } 

  return (
    <div className="App">
      <Sidebar onCloseButton={handleCloseButton} sidebar={sidebar}/>
      <Adminbar onCloseButton={handleCloseButton} adminbar={adminbar}/>
      <Navbar running={running} onStartButton={handleStartButton} onStopButton={handleStopButton} onPlusButton={handlePlusButton} onCloneButton={handleCloneButton} onStepsButton={handleStepsButton} onAdminButton={handleAdminButton} />
      <div className="WorkArea">
        <IslandArea running={running} island={island} onTileClick={handleTileClick} onPenguinClick={handlePenguinClick} />
        <Footer />
      </div>
    </div>
  );
}

const getNewIsland = async (baseURL) => {
  const islandData = await convert(baseURL + "island")
  return extractIslandData(islandData);
}

const refreshIsland = async (baseURL,island) => {
  const islandData = await convert(baseURL + "islandmoves?islandId=" + island.id );
  return extractIslandData(islandData);
}

// base fetch point
const convert = async (request) => {
  
  const debug = false;
  
  try {
    const fetchResult = await fetch(request); //Making the req
    const result = await fetchResult.json(); // parsing the response

    if (debug) {
      console.log("=== " + request + " ====");
      console.dir(result);
      console.log("=============================================");
    }

    return result; // return success object

  } catch {
    // No success => we stop everything
    console.log("Connection error");
  }
};


const extractIslandData = (islandData) => {

  const tiles = [];
  const artifacts = [];
  const penguins = [];
  
  
  islandData.island.forEach(tile => {
    tiles.push({key: tile.li *10 + tile.col, type: tile.type, num: tile.num, var: tile.var, line: tile.li, col:tile.col})
    artifacts.push({key: tile.li *10 + tile.col, type:tile.art, line: tile.li, col:tile.col})
  }); 
  islandData.penguins.forEach(penguin => {
    var gender = penguin.gender==="male"?"m":"f";
    if (penguin.age < 6 ) gender = "y";
    var activity = 0;
    if (penguin.eating > 0) {
      activity = 1;
    } else if (penguin.fishtime > 0) {
      activity = 2;
    } else if (penguin.loving > 0) {
      activity = 3;
    }
    penguins.push({key: penguin.id, alive:penguin.alive, name:penguin.name, lpos:penguin.lpos, hpos:penguin.hpos, gender: gender, activity: activity, hungry:penguin.hungry, wealth:penguin.wealth, shape:penguin.fat})
  }); 

  return {id: islandData.islandId,
          name: islandData.islandName,
          size: islandData.islandSize,
          points: islandData.points,
          weather: islandData.weather,
          tiles: tiles,
          artifacts: artifacts,
          penguins: penguins}
}

// TEST DATA

// return {id:new Date().getTime() % 1000};
// switch (Math.floor(Math.random() * 4)) {
//   case 0:
//     return {...island,weather:"rain",
//     tiles:[{key:0, type:1, num:0,var:"B",x:1,y:1},{key:1, type:1, num:3,var:"B",x:1,y:2},{key:2, type:0, num:4,var:"A",x:1,y:3},{key:3, type:1, num:11,var:"A",x:1,y:4},{key:4, type:2, num:9,var:"b",x:1,y:5}],
//     artifacts:[{key:0,name:"empty"},{key:1,name:"cross"},{key:2,name:"empty"},{key:3,name:"fish"}]};
//   case 1:
//     return {...island,weather:"sun",
//     tiles:[{key:0, type:1, num:0,var:"B",x:1,y:1},{key:5, type:1, num:3,var:"B",x:1,y:2},{key:2, type:0, num:8,var:"A",x:1,y:3},{key:3, type:1, num:12,var:"A",x:1,y:4},{key:4, type:3, num:9,var:"b",x:1,y:5}],
//     artifacts:[{key:0,name:"empty"},{key:1,name:"cross"},{key:2,name:"empty"},{key:3,name:"fish"}]};
//   case 2:
//     return {...island,weather:"snow",
//     tiles:[{key:0, type:0, num:14,var:"B",x:1,y:1},{key:1, type:1, num:7,var:"B",x:1,y:2},{key:2, type:1, num:10,var:"A",x:1,y:3},{key:3, type:1, num:13,var:"A",x:1,y:4},{key:4, type:1, num:9,var:"b",x:1,y:5}],
//     artifacts:[{key:0,name:"empty"},{key:1,name:"cross"},{key:2,name:"fish"},{key:3,name:"wreath"}]};
//   case 3:
//     return {...island,weather:"cold",
//     tiles:[{key:0, type:1, num:5,var:"B",x:1,y:1},{key:5, type:1, num:9,var:"B",x:1,y:2},{key:2, type:1, num:8,var:"A",x:1,y:3},{key:3, type:1, num:14,var:"A",x:1,y:4},{key:4, type:1, num:9,var:"b",x:1,y:5}],
//     artifacts:[{key:0,name:"empty"},{key:1,name:"cross"},{key:2,name:"empty"},{key:3,name:"fish"}]};
// }


