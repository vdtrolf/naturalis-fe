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

export default function Penguin(props) {

  const [penguin,setPenguin] = useState({});  
  const {className, penguinObj, onPenguinClick, ...attribs } = props;
  
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
      image = penguinObj.gender ==="m"? peng_m_fishing: peng_f_fishing;
      if (penguinObj.gender ==="y") image = peng_y_fishing;
    }
    setPenguin({img:image,left:penguinObj.lpos*48,top:penguinObj.hpos*48,alive:penguinObj.alive});
  },[penguinObj])    
  
  const handleClick = () => {
    onPenguinClick(penguin.id);
 }

  if (penguin.alive) {
    return <div className="Penguin" style={{left: penguin.left + 'px', top: penguin.top + 'px', transition:'1s'}} >
      <img src={penguin.img} style={{width: '48px', height:'48px'}} onClick={handleClick} />
    </div>
  } 

}