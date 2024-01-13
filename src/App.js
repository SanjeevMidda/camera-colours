import "./index.css";
import Color from "./components/Color";
import { useState } from "react";

function App() {
  const [lenseColor, setLenseColor] = useState("blue");

  return (
    <div className="App">
      <h3>camera</h3>
      <div className="camera-container">
        <div className="lense-container">
          <div className="lense" style={{ background: lenseColor }}>
            <div className="inner-lense"></div>
          </div>
        </div>
        <div className="color-container">
          <Color
            color="red"
            lenseColor={lenseColor}
            setLenseColor={() => setLenseColor("red")}
          />
          <Color
            color="blue"
            lenseColor={lenseColor}
            setLenseColor={() => setLenseColor("blue")}
          />
          <Color
            color="purple"
            lenseColor={lenseColor}
            setLenseColor={() => setLenseColor("purple")}
          />
          <Color
            color="gold"
            lenseColor={lenseColor}
            setLenseColor={() => setLenseColor("gold")}
          />
          <Color
            color="brown"
            lenseColor={lenseColor}
            setLenseColor={() => setLenseColor("brown")}
          />
          <Color
            color="green"
            lenseColor={lenseColor}
            setLenseColor={() => setLenseColor("green")}
          />
          <Color
            color="gold"
            lenseColor={lenseColor}
            setLenseColor={() => setLenseColor("mint")}
          />
          <Color
            color="black"
            lenseColor={lenseColor}
            setLenseColor={() => setLenseColor("black")}
          />
          <Color
            color="coral"
            lenseColor={lenseColor}
            setLenseColor={() => setLenseColor("coral")}
          />
          <Color
            color="grey"
            lenseColor={lenseColor}
            setLenseColor={() => setLenseColor("grey")}
          />
          <Color
            color="white"
            lenseColor={lenseColor}
            setLenseColor={() => setLenseColor("white")}
          />
          <Color
            color="pink"
            lenseColor={lenseColor}
            setLenseColor={() => setLenseColor("pink")}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
