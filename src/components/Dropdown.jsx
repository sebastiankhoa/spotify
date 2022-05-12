import React from "react";
import {
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
	MenuItemOption,
	MenuGroup,
	MenuOptionGroup,
	MenuDivider,
	Button,
	Image,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";

const Dropdown = () => {
	const router = useRouter();
	const { data: session } = useSession();
	return (
		<Menu>
			<MenuButton
				gap="1"
				as={Button}
				leftIcon={<BsChevronDown />}
				rightIcon={<Image rounded="full" src={session?.user?.image} alt="userimage" objectFit="cover" w="10" h="10" />}
				rounded="20px"
				bg="blackAlpha.400"
				color="gray.200"
				_hover={{ opacity: "80%" }}
				_expanded={{ bg: "blue.400" }}
				_focus={{ boxShadow: "outline" }}
			></MenuButton>
			<MenuList>
				<MenuItem onClick={() => signOut({ redirect: false })}>Log out</MenuItem>
				<MenuItem onClick={() => router.push("https://www.spotify.com/us/signup")}>Create account</MenuItem>
			</MenuList>
		</Menu>
	);
};

export default Dropdown;
