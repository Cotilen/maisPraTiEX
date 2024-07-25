import "./App.css";
import PersistantCounter from "./components/PersistentCounter.jsx";
import WindowSize from "./components/WindowSize.jsx";
import TitleUpdater from "./components/TitleUpdater.jsx";
import RealTimeClock from "./components/RealTimeClock.jsx";
import ToggleText from "./components/ToggleText.jsx";
import LimitedCounter from "./components/LimitedCounter.jsx";

function App() {
  return (
    <div className="components">
      <TitleUpdater />
      <div className="line"></div>
      <WindowSize />
      <div className="line"></div>
      
      <PersistantCounter />
      <div className="line"></div>
    

      <RealTimeClock />
      <div className="line"></div>
      <ToggleText />
      <div className="line"></div>
      <LimitedCounter />
    </div>
  );
}

export default App;
