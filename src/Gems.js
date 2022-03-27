import { useRecoilValue } from "recoil";
import { gameScore } from "./atoms";

function Gems() {
  const score = useRecoilValue(gameScore);
  return (
    <h3 style={{ display: "flex", justifyContent: "space-around" }}>
      {[...Array(score)].map((n, i) => {
        return <span key={i}>💎 </span>;
      })}
    </h3>
  );
}

export default Gems;
