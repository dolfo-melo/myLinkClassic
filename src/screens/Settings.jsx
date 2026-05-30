import { ChevronRight, Monitor, Volume2, Bluetooth, CalendarClock, Cpu } from "lucide-react";

const settings = [
  { label: "Tela", icon: Monitor },
  { label: "Som", icon: Volume2 },
  { label: "Bluetooth", icon: Bluetooth },
  { label: "Data e Hora", icon: CalendarClock },
  { label: "Sistema", icon: Cpu },
];

export default function Settings() {
  return (
    <div className="panel-screen">
      <h2>CONFIGURAÇÕES</h2>

      <div className="settings-list">
        {settings.map(({ label, icon: Icon }) => (
          <button key={label}>
            <span><Icon size={24} /> {label}</span>
            <ChevronRight />
          </button>
        ))}
      </div>
    </div>
  );
}
