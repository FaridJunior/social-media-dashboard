import React from "react";
import "./theme_switcher.css";

function MainHeader() {
  return (
    <header>
      <div className="header">
        <h1>Social Media Dashboard</h1>
        <p className="subtitles">Totao Followers: 23,004</p>
      </div>
      <label className="theme__switcher">
        <input type="checkbox" id="plan-timeing-mounthly" />
        <span className="slider round"></span>
      </label>
    </header>
  );
}

export default MainHeader;
