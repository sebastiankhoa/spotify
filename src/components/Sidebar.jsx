import { Flex, Image } from "@chakra-ui/react";
import React from "react";
import { AiFillHome, AiFillClockCircle } from "react-icons/ai";
import { BiCompass, BiMicrophone, BiChart, BiDotsHorizontalRounded } from "react-icons/bi";
import { useRouter } from "next/router";

const Sidebar = () => {
	const router = useRouter();
	return (
		<Flex
			direction="column"
			align="center"
			color="white"
			gap="8"
			fontSize="20pt"
			pos="fixed"
			top="0"
			w={{ md: "60px", lg: "80px" }}
			cursor="pointer"
			display={{ base: "none", md: "flex" }}
		>
			<Image src="/images/logo.png" alt="logo" h="50px" w="50px" onClick={() => router.push("/")} />
			<AiFillHome />
			<BiCompass />
			<BiMicrophone />
			<BiChart />
			<AiFillClockCircle />
			<BiDotsHorizontalRounded />
		</Flex>
	);
};

export default Sidebar;
