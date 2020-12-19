import MainHeader from "./components/MainHeader";
import SecondaryHeader from "./components/SecondaryHeader";
import FollowersSection from "./layout/FollowersSection";
import OverViewSection from "./layout/OverViewSection";
import { socialMediaFollowrs, overviewData } from "./data";
import "./style.css";
function App() {
  return (
    <div className="App">
      <MainHeader />
      <FollowersSection socialMediaFollowrs={socialMediaFollowrs} />
      <SecondaryHeader />
      <OverViewSection overviewData={overviewData} />
    </div>
  );
}

export default App;
