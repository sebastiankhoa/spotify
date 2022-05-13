import { Box, Button, Divider, Flex, Input, Text } from "@chakra-ui/react";
import { MdOutlineShortText } from "react-icons/md";
import { BsCircle } from "react-icons/bs";

const Search = ({ searchTerm, setSearchTerm }) => {
	return (
		<Flex
			border="1px"
			rounded="full"
			borderColor="gray.300"
			py={{ base: "0", md: "1", lg: "2" }}
			px="1"
			mt="4"
			mx="2"
			align="center"
		>
			<Flex flexGrow={1} align="center" ml="2" color="white">
				<Box h="5" w="5" border="2px solid" rounded="full" transitionDuration="2s" _hover={{ borderColor: "red" }} />
				<Input
					type="text"
					placeholder="Tìm kiếm bài hát..."
					value={searchTerm}
					border="none"
					_focus={{ border: "none" }}
					_placeholder={{ color: "white", fontWeight: "700", fontSize: "13px" }}
					onChange={(e) => setSearchTerm(e.target.value)}
				/>
			</Flex>
			<Flex gap="2" display={{ base: "none", lg: "flex" }}>
				<Button variant="outline" color="gray.300" rounded="xl" _hover={{ opacity: "80%", color: "white" }}>
					Minimal
				</Button>
				<Button variant="outline" color="gray.300" rounded="xl" _hover={{ opacity: "80%", color: "white" }}>
					House
				</Button>
				<Button variant="outline" color="gray.300" rounded="xl" _hover={{ opacity: "80%", color: "white" }}>
					Minimal
				</Button>
			</Flex>
			<Divider variant="dashed" orientation="vertical" ml="4" />
			<Flex color="gray.300" align="center" mr="3" ml="5" cursor="pointer">
				<MdOutlineShortText fontSize="20pt" />
				<Text>Filters</Text>
			</Flex>
		</Flex>
	);
};

export default Search;
