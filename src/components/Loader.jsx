import { Box, Flex, Image } from "@chakra-ui/react";

function Loader() {
	return (
		<Flex direction="column" align="center" justify="center">
			<Box pos="relative" w={{ base: "400px", lg: "550px" }} h={{ base: "250px", lg: "240px" }}>
				<Image src="https://rb.gy/y9mwtb" objectFit="contain" alt="loader" />
			</Box>
		</Flex>
	);
}

export default Loader;
