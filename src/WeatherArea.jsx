import React from "react";
import clsx from "clsx";
import sun from "./images/weather-sun.png";
import rain from "./images/weather-rain.png";
import cold from "./images/weather-cold.png";
import snow from "./images/weather-snow.png";

export default function WeatherArea(props) {

  const {weather, runningState} = props;
  const classes = clsx("WeatherArea", weather);

  const NOT_STARTED = 0;
  //const RUNNING = 1;
  //const PAUSED = 2;
  //const ENDED = 3;

  const weathers = [{name:"sun", img: sun},{name:"rain", img: rain},{name:"snow", img: snow} ,{name:"cold", img: cold}];
  const found = weathers.find(wea => wea.name === weather)

  if (found) {  
    return <div className={classes} style={{opacity:runningState===NOT_STARTED?'0':'100'}} ><img src={found.img} width="576px" height="570px" alt=""/></div>
  }
}
