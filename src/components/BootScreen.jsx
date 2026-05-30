export default function BootScreen({ done }) {
  return (
    <main className="app-shell">
      <section className={`boot-frame ${done ? "boot-done" : ""}`}>
        <aside className="boot-sidebar">
          <span>⌂</span>
          <span>♪</span>
          <span>☎</span>
          <span>▣</span>
        </aside>

        <div className="boot-center">
          <div className="bowtie big" />
          <h1>MY Link Classic</h1>
          <p>SISTEMA MULTIMÍDIA</p>

          <div className="boot-progress">
            <span />
          </div>

          <strong>{done ? "SISTEMA PRONTO" : "INICIANDO SISTEMA..."}</strong>
        </div>

        <div className="boot-footer">
          <span>01.01.2025</span>
          <span>16:20</span>
          <span>27°C</span>
        </div>
      </section>
    </main>
  );
}
