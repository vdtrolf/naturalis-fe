import React, {useState,useEffect} from "react";
import Button from "./Button.jsx";

import peng_m from "./images/peng-m-0.png";
import peng_f from "./images/peng-f-0.png";
import peng_y from "./images/peng-y-0.png";

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

import fish_s from "./images/PF-fish.png";
import swim_s from "./images/swim-s.png";
import ice_s from "./images/ice-s.png";

import type_0_s from "./images/PF-0-s.png";
import type_1_s from "./images/PF-1-s.png";
import type_2_s from "./images/PF-2-s.png";
import type_3_s from "./images/PF-3-s.png";
import type_4_s from "./images/PF-4-s.png";
import type_5_s from "./images/PF-5-s.png";
import type_6_s from "./images/PF-6-s.png";
import type_7_s from "./images/PF-7-s.png";

import type_1_w from "./images/PF-1-w.png";
import type_2_w from "./images/PF-2-w.png";
import type_3_w from "./images/PF-3-w.png";
import type_4_w from "./images/PF-4-w.png";
import type_5_w from "./images/PF-5-w.png";
import type_6_w from "./images/PF-6-w.png";
import type_7_w from "./images/PF-7-w.png";

export default function Details(props) {

  const {admin, sidebar, onDetailsCloseButton, penguin } = props;
  
  console.dir(penguin)

  let cellartifacts = [type_0_s,type_1_s,fish_s,swim_s,ice_s];
  let cellsoils = [type_0_s,type_1_s,type_2_s,type_3_s,type_4_s,type_5_s,type_6_s,type_7_s,type_0_s]
  let cellwarm = [type_0_s,type_1_w,type_2_w,type_3_w,type_4_w,type_5_w,type_6_w,type_7_w,type_1_w]

  const hunger = [hunger_0,hunger_1,hunger_2,hunger_3,hunger_4,hunger_5]
  const health = [health_0,health_1,health_2,health_3,health_4,health_5]
  const shapes = ["","fat","fit","slim","lean"]
  let genderTxt = penguin.gender === "m" ? "male":"female"
  if (penguin.gender === "y") genderTxt = "child"
  const activities = ["","Eating","Fishing","Making... well, you know..."]

  let hungerImg = hunger[Math.floor(penguin.hungry/20)]
  let healthImg = health[Math.floor(penguin.wealth/20)]

    return (
      <div id="myDetails" className="Details" > 
        <div>
          <div className="detailsHead" ><img src={peng_m} width="64px" height="64px" alt="" /><div className="detailsName">{penguin.name} ({genderTxt}, {shapes[penguin.shape]} - {Math.floor(penguin.age)} years old)</div></div>
          <div className="detailsList" >
            <div className="detailsBar"><div>Hunger: {penguin.hungry} </div><img src={hungerImg} width="100px" height="20px" alt="" /></div>
            <div className="detailsBar"><div>Warmth: {100 - penguin.wealth} </div><img src={healthImg} width="100px" height="20px" alt=""/></div>
            <div className="detailsBar"><div>Has Ice: {penguin.hasIce?"yes":"no"}</div></div>
            <div className="detailsBar"><div>Strategy: {penguin.strategyShort}</div></div>
            <div className="detailsBar"><div>&nbsp;</div></div>
            <div className="detailsBar">
                <div />
                <button className="inputButton" type="submit" onClick={onDetailsCloseButton} value="Submit">Close</button><div />
            </div>
          </div>
        </div>
        <div className="detailsGridBack" >
          {penguin.knownWorld?
            (<div className={penguin.knownWorld.length>25?"detailsGridLarge":"detailsGridSmall"}>
              {penguin.knownWorld.map(cell => <img src={
                cell.art > 0?
                    cell.art === 1 && cell.warm > 0? cellwarm[1]: cellartifacts[cell.art]:
                    cell.warm > 0 ? cellwarm[cell.soil] : cellsoils[cell.soil]
                }width="20px" height="20px" alt="" />)}
          </div>)
            :(<div className="detailsGridLarge" />)
          }
        </div>
      </div>

    )
 

}