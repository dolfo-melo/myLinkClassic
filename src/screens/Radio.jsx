import { ChevronLeft, ChevronRight, Radio as RadioIcon, SkipBack, SkipForward } from "lucide-react";

export default function Radio() {
  const presets = ["87.5", "90.9", "101.7", "103.9", "107.9"];

  return (
    <div className="panel-screen">
      <h2>RÁDIO FM</h2>

      <div className="radio-box">
        <RadioIcon size={54} />
        <div className="radio-tune">
          <ChevronLeft />
          <strong>FM 101.7 MHz</strong>
          <ChevronRight />
        </div>
        <span>ANTENA 1</span>

        <div className="preset-grid">
          {presets.map((freq, index) => (
            <button className={index === 2 ? "selected" : ""} key={freq}>
              <small>{index + 1}</small>
              {freq}
            </button>
          ))}
        </div>

        <div className="player-controls compact">
          <SkipBack />
          <span>▮▮</span>
          <SkipForward />
        </div>
      </div>
    </div>
  );
}
