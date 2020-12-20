import React, { useState } from "react";
import MainHeader from "./components/headers/MainHeader";
import SecondaryHeader from "./components/headers/SecondaryHeader";
import FollowersSection from "./layout/FollowersSection";
import OverViewSection from "./layout/OverViewSection";
import { socialMediaFollowrs, overviewData } from "./data";
import "./style.css";
import Attribution from "./components/Attribution/Attribution";
function App() {
  const [theme, setTheme] = useState(false);
  return (
    <div className={"App " + `${theme ? "light-theme" : "dark-theme"}`}>
      <div className="container">
        <MainHeader theme={theme} setTheme={setTheme} />
        <FollowersSection socialMediaFollowrs={socialMediaFollowrs} />
        <SecondaryHeader />
        <OverViewSection overviewData={overviewData} />
        <Attribution />
      </div>
    </div>
  );
}

export default App;
