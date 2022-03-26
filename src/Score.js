import { useRecoilValue } from "recoil";
import { gameScore } from "./atoms";

function Score() {
  const score = useRecoilValue(gameScore);
  return <h3>Score: {score}</h3>;
}

export default Score;
