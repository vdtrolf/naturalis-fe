import React from "react";
import clsx from "clsx";

export default function Button(props) {
  const { children, className, ...attribs } = props;
  const classes = clsx({ "ui-button": className });

  return (
    <button className={classes} {...attribs}>
      {children}
    </button>
  );
}
