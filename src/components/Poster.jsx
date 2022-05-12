import { Flex, Img, Text } from "@chakra-ui/react";
import { BsFillPauseFill, BsFillPlayFill } from "react-icons/bs";
import { motion } from "framer-motion";
import { useRecoilState } from "recoil";

import { playerState, playerTrackState } from "../atom/playerAtom";

const Poster = ({ song, chooseTrack }) => {
	const [play, setPlay] = useRecoilState(playerState);
	const [playTrack, setPlayTrack] = useRecoilState(playerTrackState);
	// console.log({ play });
	// console.log({ song });

	// ChooseTrack from Dashboar => Body => BeautyBox => Here
	const handlePlay = () => {
		chooseTrack(song);
		setPlay(true);
		if (song.uri === playTrack.uri) {
			setPlay(!play);
		}
	};

	return (
		<Flex
			mx="auto"
			height="340px"
			w={{ base: "280px", md: "260px", lg: "230px", "2xl": "280px" }}
			cursor="pointer"
			pos="relative"
			overflow="hidden"
			rounded="50px"
			as={motion.div}
			whileHover={{ scale: 1.05 }}
			transition="0.5s ease-in-out"
			mt="20px"
			onClick={handlePlay}
		>
			<Img src={song.albumUrl} alt="album image" objectFit="cover" boxSize="360px" rounded="3xl" />
			<Flex pos="absolute" zIndex="50" bottom="0" left="0px" gap="5" w="full" pb="4" pt="1">
				{song.uri === playTrack.uri && play ? (
					<Flex
						bg="green.500"
						color="white"
						rounded="full"
						h="10"
						w="10"
						align="center"
						justify="center"
						_hover={{ bg: "green" }}
						transitionDuration="2s"
						ml="5"
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
						onClick={handlePlay}
					>
						<BsFillPlayFill />
					</Flex>
				)}

				<Flex direction="column" color="white" w="80%">
					<Text color="white" fontWeight="600" fontSize="8pt">
						{song.title}
					</Text>
					<Text color="gray.200" fontSize="8pt">
						{song.artist}
					</Text>
				</Flex>
			</Flex>
		</Flex>
	);
};

export default Poster;
