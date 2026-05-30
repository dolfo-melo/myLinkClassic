import { Grid3X3, Music, Map, Settings, Radio, Phone } from "lucide-react";

const apps = [
  { label: "Música", icon: Music },
  { label: "Mapas", icon: Map },
  { label: "Rádio", icon: Radio },
  { label: "Telefone", icon: Phone },
  { label: "Sistema", icon: Settings },
  { label: "Extras", icon: Grid3X3 },
];

export default function Apps() {
  return (
    <div className="apps-screen">
      {apps.map(({ label, icon: Icon }) => (
        <button key={label}>
          <Icon size={46} />
          <span>{label}</span>
        </button>
      ))}
    </div>
  );
}
