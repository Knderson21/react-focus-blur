import React, { useState } from "react";

export default function VolumeControl() {
  const [volume, setVolume] = useState(50);
  const [status, setStatus] = useState(
    "Use arrow keys ↑ and ↓ to control volume.",
  );

  function handleKeyDown(e) {
    if (e.key === "ArrowUp") {
  // Increase volume when up arrow key is pressed
  setVolume((prevVolume) => Math.min(prevVolume + 5, 100));
  setStatus("Turning volume up");
} else if (e.key === "ArrowDown") {
  // Decrease volume when down arrow key is pressed
  setVolume((prevVolume) => Math.max(prevVolume - 5, 0));
  setStatus("Turning volume down");
}
  }

    function handleKeyUp() {
      setStatus("Use arrow keys ↑ and ↓ to control volume.");
    }
  
  return (
    <div>
      <h2>Volume Control 🔊</h2>
      <span>Volume: {volume}</span>
      <div id="volume-bar-empty-space">
        <div id="volume-bar" style={{ width: `${volume}%` }}></div>
      </div>
      <div tabIndex={0} onKeyDown={handleKeyDown} onKeyUp={handleKeyUp}>Status: {status}</div>
    </div>
  );
}