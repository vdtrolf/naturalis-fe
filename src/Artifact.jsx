import React, {useState,useEffect} from "react";
import empty from "./images/empty.png";
import fish from "./images/fish.png";
import swim from "./images/swim.png";
import cross from "./images/cross.png";
import wreath from "./images/wreath.gif";
import ice from "./images/empty.png";

export default function Artifact(props) {

  const [artifact,setArtifact] = useState({});  
  const {className,type, ...attribs } = props;
  
  const artifacts = [empty, wreath, cross, fish, fish,ice]
 
  useEffect(() => {
    setArtifact({type:type, img: artifacts[type]});
  },[type])              

  if (artifact.img) {
    return <img src={artifact.img} style={{width: '48px', height:'48px', transition:'0.5s'}}  />
  } 

  



}