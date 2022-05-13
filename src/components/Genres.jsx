import { Flex, Text, Box, Button } from "@chakra-ui/react";
import React from "react";

const Genres = () => {
	return (
		<Flex direction="column" w="250px" gap="2" display={{ base: "none", xl: "flex" }}>
			<Text fontWeight="700" fontSize="18pt" mb="5" textDecoration="underline">
				Thể Loại Nhạc
			</Text>
			<Flex flexWrap="wrap" gap="1">
				<Box bg="blackAlpha.500" color="white" rounded="lg" cursor="pointer" _hover={{ opacity: "80%" }} p="2">
					Classic
				</Box>
				<Box bg="blackAlpha.500" color="white" rounded="lg" cursor="pointer" _hover={{ opacity: "80%" }} p="2">
					House
				</Box>
				<Box bg="blackAlpha.500" color="white" rounded="lg" cursor="pointer" _hover={{ opacity: "80%" }} p="2">
					Minimal
				</Box>
				<Box bg="blackAlpha.500" color="white" rounded="lg" cursor="pointer" _hover={{ opacity: "80%" }} p="2">
					Hip-hop
				</Box>
				<Box bg="blackAlpha.500" color="white" rounded="lg" cursor="pointer" _hover={{ opacity: "80%" }} p="2">
					Electronic
				</Box>
				<Box bg="blackAlpha.500" color="white" rounded="lg" cursor="pointer" _hover={{ opacity: "80%" }} p="2">
					Chillout
				</Box>
				<Box bg="blackAlpha.500" color="white" rounded="lg" cursor="pointer" _hover={{ opacity: "80%" }} p="2">
					Blues
				</Box>
				<Box bg="blackAlpha.500" color="white" rounded="lg" cursor="pointer" _hover={{ opacity: "80%" }} p="2">
					Country
				</Box>
				<Box bg="blackAlpha.500" color="white" rounded="lg" cursor="pointer" _hover={{ opacity: "80%" }} p="2">
					Techno
				</Box>
			</Flex>
			<Button bg="blackAlpha.700" color="white" size="lg" rounded="3xl" _hover={{ opacity: "80%" }}>
				All Genres
			</Button>
		</Flex>
	);
};

export default Genres;
