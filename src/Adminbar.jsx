import React from "react";
import clsx from "clsx";
import Button from "./Button.jsx";

export default function Adminbar(props) {
  const {className, adminbar, onCloseButton, ...attribs } = props;
  const classes = clsx({ "ui-button": className });

  return (
    <div id="mySidebar" className="adminbar" style={{width:adminbar?'200px':'0px'}}>
      <div className="adminNavbar">
        <div>Account</div>
        <div><Button className="ButtonClose" onClickHandler={onCloseButton} >&nbsp;</Button></div>
      </div>
      <div id="adminform">
        <p>coucou</p>
      </div>
    </div>
  );
}