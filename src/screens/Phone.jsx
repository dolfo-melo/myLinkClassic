import { PhoneCall, UserRound } from "lucide-react";

export default function Phone() {
  return (
    <div className="empty-screen">
      <PhoneCall size={92} />
      <h2>TELEFONE</h2>
      <p>Conecte seu celular via Bluetooth.</p>
      <button><UserRound size={22} /> Procurar contatos</button>
    </div>
  );
}
