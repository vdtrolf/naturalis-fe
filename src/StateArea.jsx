import React from "react";
import paused from "./images/state-paused.png";
import ended from "./images/state-endgame.png";

export default function StateArea(props) {

  const {runningState} = props;

  // const NOT_STARTED = 0;
  // const RUNNING = 1;
  const PAUSED = 2;
  // const ENDED = 3;

  if (runningState === PAUSED) {  
    return <div className="StateArea" ><img src={paused} width="576px" height="570px" alt=""/></div>
  } else {
    return <div className="StateArea" ><img src={ended} width="576px" height="570px" alt=""/></div>
  }
}
