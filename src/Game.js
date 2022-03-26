import { useRecoilState } from "recoil";
import { gameScore } from "./atoms";

function Game() {
  const [score, setScore] = useRecoilState(gameScore);
  const paperClick = () => {
    setScore(score + 1);
  };

  return (
    <div>
      <button
        style={{
          fontSize: 100,
          cursor: "pointer",
          background: "transparent",
          border: 0,
        }}
        onClick={paperClick}
      >
        🧻
      </button>
    </div>
  );
}

export default Game;
