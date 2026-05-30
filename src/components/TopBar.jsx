export default function TopBar({ title = "VECTRA" }) {
  return (
    <header className="top-bar">
      <div className="clock-pill">16:20</div>

      <div className="brand">
        <div className="bowtie" aria-hidden="true" />
        <strong>{title}</strong>
      </div>

      <div className="temperature">27°C</div>
    </header>
  );
}
