import React from "react";
import clsx from "clsx";
import sun from "./images/weather-sun.png";
import rain from "./images/weather-rain.png";
import cold from "./images/weather-cold.png";
import snow from "./images/weather-snow.png";

export default function WeatherArea(props) {

  const {weather, running, ...attribs} = props;
  const classes = clsx("WeatherArea", weather);

  const weathers = [{name:"sun", img: sun},{name:"rain", img: rain},{name:"snow", img: snow} ,{name:"cold", img: cold}];
  const found = weathers.find(wea => wea.name === weather)

  if (found) {  
    return <div className={classes} style={{opacity:running?'100':'0'}} ><img src={found.img} /></div>
  }
}
