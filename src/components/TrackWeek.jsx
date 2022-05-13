import { BsFillPlayFill, BsFillPauseFill } from "react-icons/bs";
import { AiFillHeart } from "react-icons/ai";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { ImHeadphones } from "react-icons/im";
import { Flex, Text } from "@chakra-ui/react";

import { playerState, playerTrackState } from "../atom/playerAtom";
import Track from "./Track";

const TrackWeek = ({ searchResult, newRelease, chooseTrack }) => {
	return (
		<Flex w={{ base: "350px", md: "550px", lg: "780px", xl: "1000px" }} direction="column">
			<Text fontWeight="700" fontSize="16pt" mb="5" textDecoration="underline" color="gray.700">
				{searchResult.length === 0 ? "Những bài hát hay nhất của tuần: " : "Những bài hát tìm kiếm được"}
			</Text>
			<Flex
				direction="column"
				h={{ base: "420px", md: "550px" }}
				mx="2"
				rounded="3xl"
				bg="blackAlpha.300"
				gap="5"
				overflow="scroll"
				className="scrollbar"
			>
				{searchResult.length === 0
					? newRelease
							.slice(4, newRelease.length)
							.map((track) => <Track key={track.id} track={track} chooseTrack={chooseTrack} />)
					: searchResult
							.slice(4, searchResult.length)
							.map((track) => <Track key={track.id} track={track} chooseTrack={chooseTrack} />)}
			</Flex>
		</Flex>
	);
};

export default TrackWeek;
