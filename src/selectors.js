import { selector } from "recoil";

import { gameScore } from "./atoms";

const paperSize = selector({
  key: "paperSize",
  get: ({ get }) => {
    const score = get(gameScore);
    return 100 + score * 5;
  },
});

export { paperSize };
