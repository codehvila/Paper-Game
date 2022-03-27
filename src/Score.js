import { useRecoilValue } from "recoil";
import { gameScore, useResetScore } from "./atoms";

function Score() {
  const score = useRecoilValue(gameScore);
  const resetScore = useResetScore();
  return (
    <div>
      <button onClick={resetScore}>Reset Score</button>
      <h3>Score: {score}</h3>
    </div>
  );
}

export default Score;
