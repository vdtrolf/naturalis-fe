import React from "react";
import "./App.css";
import Navbar from "./Navbar.jsx";
import Sidebar from "./Sidebar.jsx";
import Adminbar from "./Adminbar.jsx";
import IslandArea from "./IslandArea.jsx";
import Footer from "./Footer.jsx";
import convert from "./Fetchserver.js"
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
  const [baseURL,setBaseURL] = useState("http://localhost:3001/");
  const [illuminatedId,setIlluminatedId] = useState(0);
  const [islandsList,setIslandsList] = useState([]);

  useEffect(() => {
    var intervalId = 0;
    if (running) {
      if(!island.id) {
        getNewIsland(baseURL)
        .then((newIsland ) => setIsland(newIsland));
      }
      intervalId = setInterval( () => {
        // console.log("in interval " + intervalId + " for island " + island.id);
        refreshIsland(baseURL, island.id)
        .then((updatedIsland) => setIsland(updatedIsland));

        if (sidebar) {
          refreshIslandsList(baseURL)
          .then((updatedIslandsList) => setIslandsList(updatedIslandsList));
        }

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
    if(sidebar) {
      refreshIslandsList(baseURL)
      .then((updatedIslandsList) => setIslandsList(updatedIslandsList));
    }
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

  const handlePenguinEnter = (id) => {
    setIlluminatedId(id);
  }

  const handlePenguinLeave = () => {
    if (illuminatedId > 0) {
      setIlluminatedId(0);
    }
  }

  const handleIslandSelect = (id) => {
    setSidebar(false);
    setAdminbar(false);
    refreshIsland(baseURL, id)
    .then((updatedIsland) => setIsland(updatedIsland));
  }

  return (
    <div className="App">
      <Sidebar onCloseButton={handleCloseButton} onIslandSelect={handleIslandSelect} baseURL={baseURL} islandId={island.id} islandsList={islandsList} sidebar={sidebar}/>
      <Adminbar onCloseButton={handleCloseButton} adminbar={adminbar}/>
      <Navbar running={running} onStartButton={handleStartButton} onStopButton={handleStopButton} onPlusButton={handlePlusButton} onCloneButton={handleCloneButton} onStepsButton={handleStepsButton} onAdminButton={handleAdminButton} />
      <div className="WorkArea">
        <IslandArea running={running} island={island} onTileClick={handleTileClick} onPenguinClick={handlePenguinClick} illuminatedId={illuminatedId}/>
        <Footer penguins={island.penguins} onPenguinEnter={handlePenguinEnter} onPenguinLeave={handlePenguinLeave}/>
      </div>
    </div>
  );
}

const getNewIsland = async (baseURL) => {
  const islandData = await convert(baseURL + "island")
  return extractIslandData(islandData);
}

const refreshIsland = async (baseURL,islandId) => {
  const islandData = await convert(baseURL + "islandmoves?islandId=" + islandId );
  return extractIslandData(islandData);
}

const refreshIslandsList = async (baseURL) => {

  console.log("refreshing");
  const islandsListData = await convert(baseURL + "islands" );
  return islandsListData.islands;
}


const extractIslandData = (islandData) => {

  const tiles = [];
  const artifacts = [];
  const penguins = [];
  const territory = [];

  // for (let i=0;i<11;i++) {
  //   var line =[];
  //   for (let j=0;j<11;j++) {
  //     line.push({});
  //   }
  //   territory.push(line);
  // }

  // islandData.island.forEach(land => {territory[land.li][land.col] = land});

  // for (let i=1;i<11;i++) {
  //   for (let j=1;j<11;j++) {
  //     const land = territory[i][j]; 
  //     tiles.push({key: land.li *10 + land.col, type: land.type, num: land.num, var: land.var, line: land.li, col:land.col})
  //     artifacts.push({key: land.li *10 + land.col, type:land.art, line: land.li, col:land.col})
  //   }
  // }

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
    } else if (penguin.fishTime > 0) {
      activity = 2;
    } else if (penguin.loving > 0) {
      activity = 3;
    }
    penguins.push({key: penguin.id, alive:penguin.alive, name:penguin.name, lpos:penguin.lpos, hpos:penguin.hpos, gender: gender, activity: activity, hungry:penguin.hungry, wealth:penguin.wealth, shape:penguin.fat, age:penguin.age, genderName:penguin.gender, fishDirection:penguin.fishDirection, strategyShort:penguin.strategyShort, illuminated:false})
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


