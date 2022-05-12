import { Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { useRecoilState } from "recoil";

import { playerState, playerTrackState } from "../atom/playerAtom";

const RecentSong = ({ recent, chooseTrack }) => {
	const [play, setPlay] = useRecoilState(playerState);
	const [playTrack, setPlayTrack] = useRecoilState(playerTrackState);

	const handlePlay = () => {
		chooseTrack(recent);
		setPlay(true);
		if (recent.uri === playTrack.uri) {
			setPlay(!play);
		}
	};

	return (
		<Flex role="group" gap="3" align="center" cursor="pointer" onClick={handlePlay}>
			<Image
				src={recent.albumUrl}
				alt="recent"
				objectFit="cover"
				h={{ md: "40px", lg: "60px" }}
				w={{ md: "40px", lg: "60px" }}
				rounded="full"
				_groupHover={{ opacity: "80%", h: "61px", w: "61px" }}
			/>
			<Flex direction="column" fontSize={{ md: "8pt", lg: "10pt" }}>
				<Text fontWeight="700" _groupHover={{ color: "green.500" }}>
					{recent.title}
				</Text>
				<Text color="gray.300">{recent.artist}</Text>
			</Flex>
		</Flex>
	);
};

export default RecentSong;
