import React, {useState,useEffect} from "react";
import empty from "./images/empty.png";
import fish from "./images/fish.png";
import cross from "./images/cross.png";
import wreath from "./images/wreath.gif";

export default function Tile(props) {

  const [artifact,setArtifact] = useState({});  
  const {className,artifactName, ...attribs } = props;
  
  const artifacts = [{name:"empty", img: empty},{name:"fish", img: fish},{name:"cross", img: cross} ,{name:"wreath", img: wreath}];
  
  useEffect(() => {
    const foundArtifact = artifacts.find(art => art.name === artifactName)
    setArtifact(foundArtifact);
  },[artifactName])              

  if (artifact.img) {
    return <img src={artifact.img} style={{width: '48px', height:'48px', transition:'0.5s'}}  />
  } 

}