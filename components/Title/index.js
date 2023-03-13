import React from "react";
import "./style.css";
import bg1 from "./bg1.png";

function Title(props) {
  return <h1 className="title" style={{backgroundImage: `url(${bg1})`}}>{props.children}</h1>;
}

export default Title;
