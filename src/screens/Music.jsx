import { Music2, Pause, SkipBack, SkipForward, Bluetooth } from "lucide-react";

export default function Music() {
  return (
    <div className="panel-screen">
      <h2>BLUETOOTH / MÚSICA</h2>

      <div className="media-player">
        <div className="album-art">
          <Music2 size={92} />
        </div>

        <div className="track-info">
          <span className="tag"><Bluetooth size={18} /> USB</span>
          <p>Legião Urbana</p>
          <h3>Tempo Perdido</h3>
          <small>As Quatro Estações</small>

          <div className="progress-line">
            <span />
          </div>

          <div className="player-controls">
            <SkipBack />
            <Pause size={38} />
            <SkipForward />
          </div>
        </div>
      </div>
    </div>
  );
}
