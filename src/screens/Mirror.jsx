import { Link, Smartphone } from "lucide-react";

export default function Mirror() {
  return (
    <div className="empty-screen">
      <Link size={92} />
      <h2>ESPELHAMENTO</h2>
      <p>Android Auto, CarPlay ou espelhamento via aplicativo.</p>
      <button><Smartphone size={22} /> Conectar dispositivo</button>
    </div>
  );
}
