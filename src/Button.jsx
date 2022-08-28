import React from "react";
import clsx from "clsx";

export default function Button(props) {
  {
    /* in this way the children and disabled attributes are extracted from props */
  }
  const { children, className, ...attribs } = props;

  {
    /* Dynamically builds the className */
  }
  const classes = clsx({ "ui-button": className });

  return (
    <button className={className} {...attribs}>
      {children}
    </button>
  );
}
