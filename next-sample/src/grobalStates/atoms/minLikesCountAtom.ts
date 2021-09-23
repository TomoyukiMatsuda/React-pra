import { atom } from "recoil";
import { AtomKeys } from "../recoilKeys";

// 絞り込みに利用する「最低LGTM数」のAtom（データストア）
export const minLikesCountState = atom<number>({
  key: AtomKeys.MIN_LIKES_COUNT_STATE,
  default: 0,
});
