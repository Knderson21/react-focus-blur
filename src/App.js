import './App.css';
import VolumeControl from "./VolumeControl.js";

import ZoomableImage from "./ZoomableImage.js"

export default function App() {
  return <div>
    <ZoomableImage imageURL="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*0tGN1LpQasvzmMkg_5CNQg.png" zoomFactor={10} />
    <VolumeControl />
  </div>;
}
