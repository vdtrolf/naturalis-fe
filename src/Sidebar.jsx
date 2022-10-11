import React, {useState,useEffect} from "react";
import clsx from "clsx";
import Button from "./Button.jsx";

export default function Sidebar(props) {

  const {className, sidebar, onCloseButton, onIslandSelect, baseURL, islandId, islandsList, ...attribs } = props;
  const classes = clsx({ "ui-button": className });
  

  
  const handleIslandClick = (id) => {
    onIslandSelect(id);
  }


  if (islandsList) {
    const listIslands = islandsList.map((island) => {
      if (island.running) {
        return <div className="island"><div onClick={() => handleIslandClick(island.id)}>{island.name}</div><div>{island.points}</div><div>runs</div></div>
      } else {
        return <div className="deadisland"><div>{island.name}</div><div>{island.points}</div><div>gone</div></div>
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