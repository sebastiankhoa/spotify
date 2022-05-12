import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
import { BsFillPlayFill, BsFillPauseFill } from "react-icons/bs";
import { AiFillHeart } from "react-icons/ai";
import { ImHeadphones } from "react-icons/im";
import { useRecoilState } from "recoil";
import { useState } from "react";
import { motion } from "framer-motion";

import { playerState, playerTrackState } from "../atom/playerAtom";

const Track = ({ track, chooseTrack }) => {
	const [like, setLike] = useState(false);

	const [play, setPlay] = useRecoilState(playerState);
	const [playTrack, setPlayTrack] = useRecoilState(playerTrackState);
	// console.log({ track });

	const handlePlay = () => {
		chooseTrack(track);
		setPlay(true);
		if (track.uri === playTrack.uri) {
			setPlay(!play);
		}
	};

	return (
		<Flex justify="space-between" mx="5" my="2">
			<Flex gap="2" align="center">
				{/* Left */}
				<Avatar src={track.albumUrl} objectFit="cover" />
				<Flex direction="column">
					<Text color="white" fontWeight="600" fontSize={{ base: "8pt", md: "11pt", lg: "13pt" }}>
						{track.title}
					</Text>
					<Text color="gray.300" fontSize={{ base: "8pt", md: "9pt", lg: "11pt" }}>
						{track.artist}
					</Text>
				</Flex>
			</Flex>
			<Flex align="center" gap="5" color="gray.300">
				{/* Right */}
				<ImHeadphones />
				<Text>{track.popularity}</Text>
				<Flex
					w="20"
					h="10"
					rounded="full"
					border="1px solid"
					borderColor="gray.500"
					align="center"
					justify="space-around"
				>
					<Box
						color={like ? "red" : "gray.300"}
						pl="5px"
						cursor="pointer"
						fontSize="15pt"
						as={motion.div}
						whileHover={{ scale: 1.3 }}
						transition="0.5s ease-in-out"
						onClick={() => setLike(!like)}
					>
						<AiFillHeart />
					</Box>
					{track.uri === playTrack.uri && play ? (
						<Flex
							bg="green.500"
							color="white"
							rounded="full"
							h="9"
							w="10"
							align="center"
							justify="center"
							_hover={{ bg: "green" }}
							transitionDuration="2s"
							ml="5"
							cursor="pointer"
							onClick={handlePlay}
						>
							<BsFillPauseFill />
						</Flex>
					) : (
						<Flex
							bg="green.500"
							color="white"
							rounded="full"
							h="9"
							w="10"
							align="center"
							justify="center"
							_hover={{ bg: "green" }}
							transitionDuration="2s"
							ml="5"
							cursor="pointer"
							onClick={handlePlay}
						>
							<BsFillPlayFill />
						</Flex>
					)}
				</Flex>
			</Flex>
		</Flex>
	);
};

export default Track;
