import { Box, Flex, SimpleGrid, Grid, GridItem, Image, Text, Img } from "@chakra-ui/react";
import { BsFillPauseFill, BsFillPlayFill } from "react-icons/bs";
import Poster from "./Poster";

const BeautyBox = ({ searchResult, newRelease, chooseTrack }) => {
	// console.log({ newRelease });

	return (
		<SimpleGrid
			spacingX="1px"
			spacingY="10"
			columns={{ base: 2, md: 2, lg: 4, "2xl": 5 }}
			overflow="scroll"
			h="420px"
			my="5"
			className="scrollbar"
		>
			{searchResult.length === 0 /*Neu khong co search se hien new release  */
				? newRelease.slice(0, 10).map((song) => <Poster key={song.id} song={song} chooseTrack={chooseTrack} />)
				: searchResult.slice(0, 10).map((song) => <Poster key={song.id} song={song} chooseTrack={chooseTrack} />)}
		</SimpleGrid>
	);
};
export default BeautyBox;
