import { sideMenu } from "../data/menu.js";

export default function Sidebar({ activeScreen, setActiveScreen }) {
  return (
    <aside className="sidebar">
      {sideMenu.slice(0, 7).map(({ id, label, icon: Icon }) => (
        <button
          key={id}
          className={`sidebar-button ${activeScreen === id ? "active" : ""}`}
          onClick={() => setActiveScreen(id)}
          title={label}
          aria-label={label}
        >
          <Icon size={29} strokeWidth={2.2} />
        </button>
      ))}
    </aside>
  );
}
