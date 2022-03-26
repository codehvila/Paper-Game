import "./App.css";
import { RecoilRoot } from "recoil";
import Game from "./Game";

function App() {
  return (
    <RecoilRoot>
      <div className="App">
        <h1>Paper Click</h1>
        <Game />
      </div>
    </RecoilRoot>
  );
}

export default App;
