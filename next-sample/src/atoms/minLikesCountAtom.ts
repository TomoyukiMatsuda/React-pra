import { atom } from "recoil";

// 絞り込みに利用する「最低LGTM数」のAtom（データストア）だよ、という宣言
export const minLikesCountState = atom<number>({
  key: "minLikesCountState",
  default: 0,
});
