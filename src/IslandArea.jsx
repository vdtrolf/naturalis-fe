import React from "react";
import WeatherArea from "./WeatherArea.jsx";
import Tile from "./Tile.jsx";
import Artifact from "./Artifact.jsx";
import Penguin from "./Penguin.jsx";
import waves from "./images/waves-back.png";


export default function IslandArea(props) {

  const {running, island, onTileClick, onPenguinClick, ...attribs} = props;
  const weather = island.weather;

  const debug = true;
  
  if (debug) {
    console.log("=== Islandarea ==============================");
    console.dir(island);
    console.log("=============================================");
  }

  if (running) {
    return (
      <>
        <div>
          <div className="WaveArea" ><img src={waves} /></div>
          <div className="GridArea" style={{zIndex:'20'}} >
            {island.tiles && island.tiles.map(tile =><Tile key={tile.key} tileType={tile.type} tileNum={tile.num} tileVar={tile.var} tileLine={tile.line} tileCol={tile.col} onTileClick={onTileClick} />)} 
          </div>
          <div className="GridArea" style={{zIndex:'30', pointerEvents:'none'}}>
            {island.artifacts && island.artifacts.map(artifact =><Artifact key={artifact.key} type={artifact.type} />)} 
          </div>
          <div className="FreeArea" style={{zIndex:'40'}}>
            {island.penguins && island.penguins.map(penguin =><Penguin key={penguin.key} penguinObj={penguin} onPenguinClick={onPenguinClick}/>)} 
          </div>
          <WeatherArea weather={weather} running={running}/>
        </div>
      </>
    )
  } else {
    return <div className="IslandArea">{props.children}</div>;
  }
}
