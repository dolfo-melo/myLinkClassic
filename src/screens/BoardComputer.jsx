import { Battery, Fuel, Gauge, Thermometer, Route } from "lucide-react";

const metrics = [
  { label: "Velocidade", value: "80 km/h", icon: Gauge },
  { label: "Consumo Médio", value: "12,4 km/l", icon: Fuel },
  { label: "Autonomia", value: "320 km", icon: Route },
  { label: "Temp. do Motor", value: "92 °C", icon: Thermometer },
  { label: "Tensão da Bateria", value: "13.8 V", icon: Battery },
];

export default function BoardComputer() {
  return (
    <div className="panel-screen">
      <h2>COMP. DE BORDO</h2>

      <div className="board-grid">
        {metrics.map(({ label, value, icon: Icon }) => (
          <div className="metric-row" key={label}>
            <div>
              <Icon size={25} />
              <span>{label}</span>
            </div>
            <strong>{value}</strong>
          </div>
        ))}
      </div>
    </div>
  );
}
