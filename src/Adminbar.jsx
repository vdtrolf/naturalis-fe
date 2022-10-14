import React from "react";
import clsx from "clsx";
import Button from "./Button.jsx";
import Admin from "./Admin.jsx";
import LoginForm from "./LoginForm.jsx";

export default function Adminbar(props) {
  const {className, admin, adminbar, onCloseButton, ...attribs } = props;
  const classes = clsx({ "ui-button": className });

  // console.dir(attribs.urls);

  return (
    <div id="mySidebar" className="adminbar" style={{width:adminbar?'200px':'0px',marginRight:adminbar?'200px':'0px'}}>
      <div className="adminNavbar">
        <div>{admin?"Login":"Admin"}</div>
        <div><Button className="ButtonClose" onClickHandler={onCloseButton} >&nbsp;</Button></div>
      </div>
      <div id="adminform">
        {admin?<Admin {...attribs} />:<LoginForm {...attribs}/>}
      </div>
    </div>
  );
}