import { selector } from "recoil";

import { gameScore } from "./atoms";

const paperSize = selector({
  key: "paperSize",
  get: ({ get }) => {
    const score = get(gameScore);
    return 100 + score * 5;
  },
});

const fetchHighScores = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(303);
    }, 1500);
  });
};

const highScores = selector({
  key: "highScores",
  get: async ({ get }) => {
    return await fetchHighScores();
  },
});

export { paperSize, highScores };
