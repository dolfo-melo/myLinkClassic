import { useEffect, useState } from "react";
import BootScreen from "./components/BootScreen.jsx";
import Sidebar from "./components/Sidebar.jsx";
import TopBar from "./components/TopBar.jsx";
import BottomStatus from "./components/BottomStatus.jsx";

import Home from "./screens/Home.jsx";
import Music from "./screens/Music.jsx";
import Radio from "./screens/Radio.jsx";
import Phone from "./screens/Phone.jsx";
import BoardComputer from "./screens/BoardComputer.jsx";
import Navigation from "./screens/Navigation.jsx";
import Apps from "./screens/Apps.jsx";
import Settings from "./screens/Settings.jsx";
import Mirror from "./screens/Mirror.jsx";

const screens = {
  home: Home,
  music: Music,
  radio: Radio,
  phone: Phone,
  vehicle: BoardComputer,
  navigation: Navigation,
  apps: Apps,
  settings: Settings,
  mirror: Mirror,
};

export default function App() {
  const [booting, setBooting] = useState(true);
  const [bootDone, setBootDone] = useState(false);
  const [activeScreen, setActiveScreen] = useState("home");

  useEffect(() => {
    const doneTimer = setTimeout(() => setBootDone(true), 2600);
    const closeTimer = setTimeout(() => setBooting(false), 3900);

    return () => {
      clearTimeout(doneTimer);
      clearTimeout(closeTimer);
    };
  }, []);

  const Screen = screens[activeScreen] || Home;

  if (booting) {
    return <BootScreen done={bootDone} />;
  }

  return (
    <main className="app-shell">
      <section className="infotainment-frame">
        <TopBar title="VECTRA" />
        <div className="main-layout">
          <Sidebar activeScreen={activeScreen} setActiveScreen={setActiveScreen} />
          <section className="screen-content">
            <Screen setActiveScreen={setActiveScreen} />
          </section>
        </div>
        <BottomStatus />
      </section>
    </main>
  );
}
