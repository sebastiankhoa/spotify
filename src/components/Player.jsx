import { useEffect } from "react";
import SpotifyPlayer from "react-spotify-web-playback";
import { useRecoilState } from "recoil";
import { BsFillPlayFill, BsFillSkipEndFill, BsFillSkipStartFill } from "react-icons/bs";
import { FiVolume2 } from "react-icons/fi";
import { RiPlayList2Fill, RiComputerLine } from "react-icons/ri";
import { MdOutlineSpeaker } from "react-icons/md";
import { BiShuffle } from "react-icons/bi";
import { IoRepeatOutline } from "react-icons/io5";
import { CgArrowsExpandRight } from "react-icons/cg";

import { playerState, playerTrackState } from "../atom/playerAtom";
import { Box, Flex, IconButton, Image, Text } from "@chakra-ui/react";

const Player = ({ token, uriTrack }) => {
	// console.log({ token });
	// console.log({ uriTrack });
	const [play, setPlay] = useRecoilState(playerState);
	const [playingTrack, setPlayingTrack] = useRecoilState(playerTrackState);

	useEffect(() => {
		if (uriTrack) {
			setPlay(true);
		}
	}, [uriTrack]);

	if (!token) return null;

	return (
		<SpotifyPlayer
			token={token}
			play={play}
			callback={(state) => {
				setPlay(state.isPlaying);
			}}
			autoPlay={true}
			uris={uriTrack ? [uriTrack] : []}
			showSaveIcon
			magnifySliderOnHover={true}
			styles={{
				bgColor: "green",
				activeColor: "red",
				color: "white",
				loaderColor: "#fff",
				sliderColor: "orange",
				trackArtistColor: "#ccc",
				trackNameColor: "#fff",
				height: "70px",
				sliderTrackColor: "magenta",
				sliderTrackBorderRadius: "4px",
				sliderHandleColor: "#fff",
				errorColor: "#fff",
			}}
		/>
	);
};

export default Player;

// <Flex w="100%" bg="blackAlpha.800" h="80px" align="center" p="2" gap="10">
// 			<Flex ml="3" gap="2">
// 				<Image
// 					src={playingTrack?.albumUrl}
// 					fallbackSrc="/images/not nhac.jpg"
// 					alt="image"
// 					objectFit="cover"
// 					w="10"
// 					h="10"
// 					rounded="xl"
// 				/>
// 				<Flex direction="column" fontSize="10pt">
// 					<Text fontWeight="600" color="white">
// 						{playingTrack.artist}
// 					</Text>
// 					<Text color="gray.300">{playingTrack.title}</Text>
// 				</Flex>
// 			</Flex>
// 			<Flex align="center" gap="3">
// 				<IconButton variant="unstyled" color="white" as={BsFillSkipStartFill} size="sm" cursor="pointer" />
// 				<IconButton
// 					as={BsFillPlayFill}
// 					bg="gray.700"
// 					color="white"
// 					size="md"
// 					rounded="full"
// 					cursor="pointer"
// 					_hover={{ opacity: "80%" }}
// 				/>
// 				<IconButton variant="unstyled" color="white" as={BsFillSkipEndFill} size="sm" cursor="pointer" />
// 			</Flex>
// 		</Flex>
