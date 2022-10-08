import React from "react";
import WeatherArea from "./WeatherArea.jsx";
import Tile from "./Tile.jsx";
import Artifact from "./Artifact.jsx";
import waves from "./images/waves-back.png";


export default function IslandArea(props) {

  const {running, island, onTileClick, ...attribs} = props;

  const weather = island.weather;
  // console.dir(island);

  if (running) {
    return (
      <>
        <div>
          <div className="WaveArea" ><img src={waves} /></div>
          <div className="GridArea" style={{zIndex:'20'}} >
            {island.tiles && island.tiles.map(tile =><Tile key={tile.key} tileNum={tile.num} tileVar={tile.var} tileX={tile.x} tileY={tile.y} onTileClick={onTileClick} />)} 
          </div>
          <div className="GridArea" style={{zIndex:'30', pointerEvents:'none'}}>
            {island.artifacts && island.artifacts.map(artifact =><Artifact key={artifact.key} artifactName={artifact.name} />)} 
          </div>
          <WeatherArea weather={weather} running={running}/>
        </div>
      </>
    )
  } else {
    return <div className="IslandArea">{props.children}</div>;
  }
}
