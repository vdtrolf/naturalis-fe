import React, {useState,useEffect} from "react";
import peng_m from "./images/peng-m-0.png";
import peng_f from "./images/peng-f-0.png";
import peng_y from "./images/peng-y-0.png";
import peng_f_fishing from "./images/peng-f-fishing.png";
import peng_f_eating from "./images/peng-f-eating.gif";
import peng_m_fishing from "./images/peng-m-fishing.png";
import peng_m_eating from "./images/peng-m-eating.gif";
import peng_y_fishing from "./images/peng-y-fishing.png";
import peng_y_eating from "./images/peng-y-eating.gif";
import peng_loving from "./images/peng-loving.gif";

import peng_f_1_fishing from "./images/peng-f-1-fishing.png";
import peng_f_2_fishing from "./images/peng-f-2-fishing.png";
import peng_f_3_fishing from "./images/peng-f-3-fishing.png";
import peng_f_4_fishing from "./images/peng-f-4-fishing.png";

import peng_m_1_fishing from "./images/peng-m-1-fishing.png";
import peng_m_2_fishing from "./images/peng-m-2-fishing.png";
import peng_m_3_fishing from "./images/peng-m-3-fishing.png";
import peng_m_4_fishing from "./images/peng-m-4-fishing.png";


export default function Penguin(props) {

  const [penguin,setPenguin] = useState({});  
  const {className, penguinObj, onPenguinClick, illuminatedId, ...attribs } = props;
  const fishing_f = [peng_f_4_fishing,peng_f_1_fishing,peng_f_2_fishing,peng_f_3_fishing,peng_f_4_fishing]
  const fishing_m = [peng_m_4_fishing,peng_m_1_fishing,peng_m_2_fishing,peng_m_3_fishing,peng_m_4_fishing]

  
  useEffect(() => {

    // console.dir(penguinObj)

    var image = peng_loving;
    if (penguinObj.activity === 0) {
      image = penguinObj.gender ==="m"? peng_m: peng_f;
      if (penguinObj.gender ==="y") image = peng_y;
    } else if (penguinObj.activity === 1) {
      image = penguinObj.gender ==="m"? peng_m_eating: peng_f_eating;
      if (penguinObj.gender ==="y") image = peng_y_eating;
    } else if (penguinObj.activity === 2) {
      console.log("------> " + penguinObj.fishDirection);
      image = penguinObj.gender ==="m"? fishing_m[penguinObj.fishDirection]: fishing_f[penguinObj.fishDirection];
      if (penguinObj.gender ==="y") image = peng_y_fishing;
    }
    var style = {width: '48px', height:'48px', backgroundColor:'', borderRadius: '0px', boxShadow: ''}
    if (penguinObj.key === illuminatedId) {
      style = {width: '48px', height:'48px', backgroundColor:'rgba(255, 195, 0, 0.5)', borderRadius:'25px', boxShadow: '0 0 20px #FFC300'}
    }

    setPenguin({img:image,left:penguinObj.lpos*48,top:penguinObj.hpos*48,alive:penguinObj.alive, style:style});
  },[penguinObj,illuminatedId])    
  
  const handleClick = () => {
    onPenguinClick(penguin.id);
 }

  if (penguin.alive) {
    return <div className="Penguin" style={{left: penguin.left + 'px', top: penguin.top + 'px', transition:'1s'}} >
      <img src={penguin.img} style={penguin.style} onClick={handleClick} />
    </div>
  } 

}



// <img src={penguin.img} style={{width: '48px', height:'48px'}} onClick={handleClick} />
// aPenguin.style.backgroundColor = "";
// aPenguin.style.borderRadius = "0px";
// aPenguin.style.boxShadow = "";
// }
// }

// if (boxPenguinId !== penguinId) {
// balloonGrid.innerHTML = "";
// boxPenguinId = penguinId;
// boxPenguinCounter = 20;
// let aPenguin = document.querySelector(`#peng${boxPenguinId}`);
// if (aPenguin) {
// aPenguin.style.backgroundColor = "rgba(255, 195, 0, 0.5)";
// aPenguin.style.borderRadius = "25px";
// aPenguin.style.boxShadow = "0 0 20px #FFC300  ";