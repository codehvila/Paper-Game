import { useRecoilValue } from "recoil";
import { highScores } from "./selectors";

function HighScore() {
  const score = useRecoilValue(highScores);
  return (
    <div>
      <h4>High Score: {score}</h4>
    </div>
  );
}

export default HighScore;
