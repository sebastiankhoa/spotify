import { Box, Flex, Image, Skeleton } from "@chakra-ui/react";

function Loader() {
	return (
		<Flex h="100vh" bg="black">
			<Flex direction="column" align="center" justify="center">
				<Box pos="relative" w={{ base: "400px", lg: "550px" }} h={{ base: "250px", lg: "240px" }}>
					<Image src="https://rb.gy/y9mwtb" objectFit="contain" alt="loader" />
				</Box>
				<Skeleton startColor="pink.500" endColor="orange.500" height="20px" />
			</Flex>
		</Flex>
	);
}

export default Loader;
