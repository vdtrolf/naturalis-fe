import React from "react";
import health_0 from "./images/health-0.png";
import health_1 from "./images/health-1.png";
import health_2 from "./images/health-2.png";
import health_3 from "./images/health-3.png";
import health_4 from "./images/health-4.png";
import health_5 from "./images/health-5.png";
import hunger_0 from "./images/hunger-0.png";
import hunger_1 from "./images/hunger-1.png";
import hunger_2 from "./images/hunger-2.png";
import hunger_3 from "./images/hunger-3.png";
import hunger_4 from "./images/hunger-4.png";
import hunger_5 from "./images/hunger-5.png";


export default function Footer(props) {

  const {penguins,onPenguinEnter,onPenguinLeave,illuminatedId} = props;

  const hunger = [hunger_0,hunger_1,hunger_2,hunger_3,hunger_4,hunger_5]
  const health = [health_0,health_1,health_2,health_3,health_4,health_5]
  const shapes = ["","Fat","Fit","Slim","Lean"]
  const activities = ["","Eating","Fishing","Making... well, you know..."]

  const handleMouseEnter = (id) => {
    onPenguinEnter(id)
  }

  if (penguins) {
    const listPenguins = penguins.map((penguin) => {
      if(penguin.alive) {
        const hungerImg = hunger[Math.floor(penguin.hungry/20)]
        const healthImg = health[Math.floor(penguin.wealth/20)]
        return <>
          <div className="TwoBars"><img src={hungerImg} width="50px" height="10px" alt="" /><img src={healthImg} width="50px" height="10px" alt=""/></div>
          <div className={penguin.key===illuminatedId?"FooterTextIlluminated":"FooterText"} >
            <div onMouseEnter={() => handleMouseEnter(penguin.key)} onMouseLeave={onPenguinLeave}>{penguin.name}</div>
            <div>({penguin.genderName} / {Math.floor(penguin.age)}y / {shapes[penguin.shape]})</div>
            <div>{penguin.activity > 0? activities[penguin.activity]:penguin.strategyShort}</div>
          </div>
        </>
      }
    });
 
    return (
      <div className="Footer">
        {listPenguins}
      </div>
    );
  } else {
    return (
      <div className="Footer">
        &nbsp;
      </div>
    )
  }
}
