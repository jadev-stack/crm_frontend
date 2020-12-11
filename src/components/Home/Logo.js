import React from "react";
import Euro from "../images/eurogroup.png";
import "../Home/Home.css";
export const Logo = () => {
  return (
    <div className={"logo"}>
      <img src={Euro} alt="Logo" />
    </div>
  );
};
