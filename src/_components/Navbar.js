import React from "react";

export default function Navbar() {
  const handleNavbarIconClick = () => {
    var x = document.getElementById("commonTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  };

  return (
    <div className="topnav" id="commonTopnav">
      <a href="/" className="active">
        Home
      </a>
      {/* <a href="/contact">Contact</a> */}
      <a href="/uploadcoupon">Upload Coupons</a>
      <button
        className=""
        style={{
          background: "#04aa6d",
          color: "white",
          position: "absolute",
          right: 0,
          height: "8%",
          width: "30%",
        }}
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
