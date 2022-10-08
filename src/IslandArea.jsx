import React from "react";
import WeatherArea from "./WeatherArea.jsx";
import Tile from "./Tile.jsx";
import waves from "./images/waves-back.png";


export default function IslandArea(props) {

  const {running, island, onTileClick, ...attribs} = props;

  const weather = island.weather;
  console.dir(island);

  if (running) {
    return (
      <>
        <div>
          <div className="WaveArea" ><img src={waves} /></div>
          <div className="TileArea">
            {island.tiles && island.tiles.map(tile =><Tile key={tile.key} tileNum={tile.num} tileVar={tile.var} tileX={tile.x} tileY={tile.y} onTileClick={onTileClick} />)} 
          </div>
          <WeatherArea weather={weather} running={running}/>
        </div>
      </>
    )
  } else {
    return <div className="IslandArea">{props.children}</div>;
  }
}
