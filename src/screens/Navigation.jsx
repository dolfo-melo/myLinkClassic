import { Navigation as NavIcon } from "lucide-react";

export default function Navigation() {
  return (
    <div className="navigation-screen">
      <div className="map-panel">
        <div className="route-line" />
        <NavIcon className="nav-marker" size={52} />
      </div>

      <div className="nav-instruction">
        <span>↗</span>
        <strong>750 m</strong>
        <p>Av. Brasil</p>
      </div>
    </div>
  );
}
