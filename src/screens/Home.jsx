import { Settings, Gauge, Link, Music, Radio, Map } from "lucide-react";
import MainCard from "../components/MainCard.jsx";

export default function Home({ setActiveScreen }) {
  return (
    <div className="home-screen">
      <MainCard icon={Settings} label="Configurações" onClick={() => setActiveScreen("settings")} />
      <MainCard icon={Gauge} label="Comp. de Bordo" onClick={() => setActiveScreen("vehicle")} />
      <MainCard icon={Link} label="Espelhamento" onClick={() => setActiveScreen("mirror")} />
      <MainCard icon={Music} label="Música" onClick={() => setActiveScreen("music")} />
      <MainCard icon={Radio} label="Rádio FM" onClick={() => setActiveScreen("radio")} />
      <MainCard icon={Map} label="Navegação" onClick={() => setActiveScreen("navigation")} />
    </div>
  );
}
