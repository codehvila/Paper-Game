import { useRecoilState, useRecoilValue } from "recoil";
import { gameScore } from "./atoms";
import { paperSize } from "./selectors";

function Game() {
  const [score, setScore] = useRecoilState(gameScore);

  const fontSize = useRecoilValue(paperSize);

  const paperClick = () => {
    setScore(score + 1);
  };

  return (
    <div>
      <button
        style={{
          fontSize,
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
