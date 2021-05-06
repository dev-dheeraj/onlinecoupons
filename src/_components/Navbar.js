import React from "react";
import history from "../_helpers/history";

export default function Navbar() {
  const handleNavbarIconClick = () => {
    var x = document.getElementById("commonTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  };
  const handleClick = (url) => {
    history.push(url);
  };

  return (
    <div className="topnav" id="commonTopnav">
      <button className="btn btn-info" onClick={() => handleClick("/")}>
        Home
      </button>
      <button
        className="btn btn-info"
        onClick={() => handleClick("/uploadcoupon")}
      >
        upload
      </button>
      <button
        className="icon btn btn-info"
        // style={{
        //   background: "#04aa6d",
        //   color: "white",
        //   position: "absolute",
        //   right: 0,
        //   height: "8%",
        //   width: "30%",
        // }}
        onClick={() => handleNavbarIconClick()}
      >
        {" "}
        Toggle
      </button>
      {/* <a href="/df" >
        <i className="fa fa-bars"></i>
      </a> */}
    </div>
  );
}
