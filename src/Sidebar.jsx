import React from "react";
import Button from "./Button.jsx";
import garb from "./images/garb.png"

export default function Sidebar(props) {

  const {admin, sidebar, onCloseButton, onIslandSelect, onIslandDelete, islandsList } = props;
    
  const handleIslandClick = (id) => {
    onIslandSelect(id);
  }

  const handleGarbClick = (id) => {
    onIslandDelete(id);
  }

  if (islandsList) {
    const listIslands = islandsList.map((island) => {
      if (island.running) {
        return <div key={island.id} className="island">{admin?<img src={garb} onClick={() => handleGarbClick(island.id)} alt=""/>:<div />}<div onClick={() => handleIslandClick(island.id)}>{island.name}</div><div>{island.points}</div><div>runs</div></div>
      } else {
        return <div key={island.id} className="deadisland">{admin?<img src={garb} onClick={() => handleGarbClick(island.id)} alt=""/>:<div />}<div>{island.name}</div><div>{island.points}</div><div>gone</div></div>
        }
    });

 
  return (
    <div id="mySidebar" className="sidebar" style={{width:sidebar?'250px':'0px'}}>
      <div className="sideNavbar">
        <div>Islands</div>
        <div><Button className="ButtonClose" onClickHandler={onCloseButton} >&nbsp;</Button></div>
      </div>
      <div id="islands">
        <div className="IslandsList">{listIslands}</div>
      </div>
    </div>
  );
  } else {
    return (
      <div id="mySidebar" className="sidebar" style={{width:sidebar?'250px':'0px'}}>
        <div className="sideNavbar">
          <div>Islands</div>
          <div><Button className="ButtonClose" onClickHandler={onCloseButton} >&nbsp;</Button></div>
        </div>
      </div>
    )
  } 

}