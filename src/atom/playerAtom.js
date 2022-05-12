import { atom } from "recoil";

export const playerState = atom({
	key: "playerState",
	default: false,
});

export const playerTrackState = atom({
	key: "trackState",
	default: "",
});
