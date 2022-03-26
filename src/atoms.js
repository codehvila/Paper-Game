import { atom } from "recoil";

const gameScore = atom({
  key: "gameScore",
  default: 0,
});

export { gameScore };
