export default function MainCard({ icon: Icon, label, onClick }) {
  return (
    <button className="main-card" onClick={onClick}>
      <Icon size={92} strokeWidth={1.8} />
      <span>{label}</span>
    </button>
  );
}
