import React from "react";
import Button from "./Button.jsx";
import logo from "./images/TTP-Logo.png";
import stile from "./images/tile-s.png";
import sfish from "./images/fish-s.png";
import sice from "./images/ice-s.png";

export default function Navbar(props) {

  // const NOT_STARTED = 0;
  const RUNNING = 1;
  // const PAUSED = 2;
  // const ENDED = 3;

  const { runningState, island, onStartButton, onStopButton, onPlusButton, onCloneButton, onStepsButton, onAdminButton } = props;

  var tilesLine =[];
  var fishesLine =[];
  var icesLine = [];

  if (island) {
    for (let i=0;i <island.tilesCount;i++) tilesLine.push(<img src={stile} width="14px" height ="14px" alt=""/>)
    for (let i=0;i <island.fishesCount;i++) fishesLine.push(<img src={sfish} width="14px" height ="14px" alt=""/>)
    for (let i=0;i <5;i++) icesLine.push(<img src={sice} width="14px" height ="14px" alt=""/>)
  }
 
  return (
    <div className="Navbar">
      <img src={logo} alt="logo" />
      <div className="NavbarInfo" >
        <div className="NavbarInfoLine" >{tilesLine}</div>
        <div className="NavbarInfoLine" >{fishesLine}</div>
        <div className="NavbarInfoLine" >{icesLine}</div>
      </div>
      <div className="ButtonArea">
        <Button className={runningState===RUNNING?"ButtonStop":"ButtonStart"} onClickHandler={runningState===RUNNING?onStopButton:onStartButton}>&nbsp;</Button>
        <Button className="ButtonPlus" onClickHandler={onPlusButton}>&nbsp;</Button>
        <Button className="ButtonClone" onClickHandler={onCloneButton}>&nbsp;</Button>
        <Button className="ButtonSteps" onClickHandler={onStepsButton}>&nbsp;</Button>
        <Button className="ButtonAdmin" onClickHandler={onAdminButton}>&nbsp;</Button>
      </div>
    </div>
  );
}
