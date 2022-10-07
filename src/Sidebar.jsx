import React from "react";
import clsx from "clsx";
import Button from "./Button.jsx";

export default function Sidebar(props) {
  const {className, sidebar, onCloseButton, ...attribs } = props;
  const classes = clsx({ "ui-button": className });


  const islands = [
    { id: 1, name: "rititi" },
    { id: 2, name: "ratata" },
    { id: 3, name: "rototo" },
  ];

  const listIslands = islands.map((island) => {
    return <li key={island.id}>{island.name}</li>;
  });

  return (
    <div id="mySidebar" className="sidebar" style={{width:sidebar?'250px':'0px'}}>
      <div className="sideNavbar">
        <div>Islands</div>
        <div><Button className="ButtonClose" onClickHandler={onCloseButton} >&nbsp;</Button></div>
      </div>
      <div id="islands">
        <ul className="IslandsList">{listIslands}</ul>
      </div>
    </div>
  );
}

{/*
<div id="mySidebar" class="sidebar">
      <a href="javascript:void(0)" class="closebtn" onclick="closeNav()"
        >&times;</a
      >
      <div id="islands">
        <div style="font-weight: bold">Islands</div>
        <div>&nbsp;</div>
        <div>
          <ul id="islandsList"></ul>
        </div>
      </div>
    </div>
*/}