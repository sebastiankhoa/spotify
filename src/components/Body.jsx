import { Box, Flex, SimpleGrid } from "@chakra-ui/react";
import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";

import BeautyBox from "./BeautyBox";
import Genres from "./Genres";
import TrackWeek from "./TrackWeek";

import Search from "./Search";

const Body = ({ spotify, chooseTrack }) => {
	// console.log({ spotify });
	const [searchTerm, setSearchTerm] = useState("");
	const [searchResult, setSearchResult] = useState([]);

	//use session on Body
	const { data: session } = useSession();
	const accessToken = session.accessToken;

	// console.log({ accessToken });
	const [newRelease, setNewRelease] = useState([]);

	useEffect(() => {
		if (!accessToken) return;
		spotify.setAccessToken(accessToken);
	}, [accessToken]);

	// Get all infomation about song when Searching.....
	useEffect(() => {
		if (!searchTerm) return setSearchResult([]);
		if (!accessToken) return;
		spotify.searchTracks(searchTerm).then((response) => {
			setSearchResult(
				response.body.tracks.items.map((track) => {
					return {
						id: track?.id,
						artist: track?.artists[0]?.name,
						title: track?.name,
						uri: track?.uri,
						albumUrl: track?.album?.images[0].url,
						popularity: track?.popularity,
					};
				})
			);
		});
	}, [searchTerm, accessToken]);

	// New Release .......
	useEffect(() => {
		if (!accessToken) return;

		spotify.getNewReleases().then((response) => {
			setNewRelease(
				response.body.albums.items.map((track) => {
					return {
						id: track?.id,
						artist: track?.artists[0]?.name,
						title: track?.name,
						uri: track?.uri,
						albumUrl: track?.images[0].url,
						popularity: track?.popularity,
					};
				})
			);
		});
	}, [accessToken]);

	// console.log({ searchResult });
	// console.log({ newRelease });

	return (
		<Flex direction="column" w={{ base: "90%", md: "70%" }} ml={{ base: "10px", md: "80px", lg: "100px" }}>
			<Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
			<BeautyBox searchResult={searchResult} newRelease={newRelease} chooseTrack={chooseTrack} />
			<Flex justify="space-around">
				<Genres />
				<TrackWeek searchResult={searchResult} newRelease={newRelease} chooseTrack={chooseTrack} />
				{/* <Recent /> */}
			</Flex>
		</Flex>
	);
};

export default Body;
