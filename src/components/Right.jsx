import { Button, Flex, Text } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { HiOutlineShieldCheck, HiViewGrid } from "react-icons/hi";
import { MdOutlineSettings } from "react-icons/md";
import { BiBell } from "react-icons/bi";
import Dropdown from "./Dropdown";
import { useSession } from "next-auth/react";
import RecentSong from "./RecentSong";

const Right = ({ SpotifyApi, chooseTrack }) => {
	const { data: session } = useSession();
	const { accessToken } = session;
	const [recentPlay, setRecentPlay] = useState([]);

	// console.log({ SpotifyApi });
	//Recent Play fetch...
	useEffect(() => {
		if (!accessToken) return;

		SpotifyApi.getMyRecentlyPlayedTracks({ limit: 50 }).then((response) => {
			setRecentPlay(
				response.body?.items?.map((recent) => {
					return {
						id: recent?.track?.id,
						artist: recent?.track?.artists[0]?.name,
						title: recent?.track.name,
						uri: recent?.track?.uri,
						albumUrl: recent?.track?.album?.images[0]?.url,
					};
				})
			);
		});
	}, [accessToken]);
	// console.log(recentPlay);

	return (
		<Flex direction="column" w="19%" display={{ base: "none", md: "flex" }} mt="3" ml={{ md: "1", lg: "5" }}>
			<Flex justify="space-around">
				<Flex>
					{/* Left */}
					<Flex
						display={{ base: "none", lg: "flex" }}
						w="130px"
						h="40px"
						bg="blackAlpha.300"
						rounded="20px"
						align="center"
						justify="center"
						gap="3"
						color="gray.200"
						fontSize="15pt"
						cursor="pointer"
					>
						<HiOutlineShieldCheck />
						<MdOutlineSettings />
						<BiBell />
					</Flex>
				</Flex>
				<Flex>
					<Dropdown />
				</Flex>
			</Flex>
			<Flex direction="column" h="600px" mt="5" rounded="10px" bg="blackAlpha.300" color="gray.200">
				<Flex align="center" justify="space-between" mt="3" mb="5" mx="3">
					<Text fontWeight="bold" fontSize={{ md: "9pt", lg: "12pt" }}>
						Bài vừa phát
					</Text>
					<HiViewGrid fontSize="15pt" />
				</Flex>
				<Flex direction="column" overflow="scroll" className="scrollbar" mx="3" gap="3">
					{recentPlay?.map((recent, _i) => (
						<RecentSong key={_i} recent={recent} chooseTrack={chooseTrack} />
					))}
				</Flex>
			</Flex>
		</Flex>
	);
};

export default Right;
