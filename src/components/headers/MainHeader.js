import React from "react";
import "./theme_switcher.css";
import "./headers.css";
function MainHeader({ theme, setTheme }) {
  const handleThemeChanging = (e) => {
    setTheme(e.target.checked);
  };
  return (
    <header className="main__header">
      <div className="">
        <h1 className="main__header__heading">Social Media Dashboard</h1>
        <p className="main__header__subtitles">Totao Followers: 23,004</p>
      </div>
      <label className="theme__switcher">
        <input
          type="checkbox"
          id="plan-timeing-mounthly"
          onClick={handleThemeChanging}
        />
        <span className="slider round"></span>
      </label>
    </header>
  );
}

export default MainHeader;
