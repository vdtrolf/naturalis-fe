import React from "react";
import Button from "./Button.jsx";
import logo from "../tiles/TTP-Logo.png";

export default function Navbar() {
  return (
    <div className="Navbar">
      <img src={logo} />
      <div className="NavbarInfo"></div>
      <div>
        <Button className="ButtonStop">&nbsp;</Button>
        <Button className="ButtonStart">&nbsp;</Button>
        <Button className="ButtonClone">&nbsp;</Button>
      </div>
    </div>
  );
}
