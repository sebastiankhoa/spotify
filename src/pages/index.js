import { Flex, Text } from "@chakra-ui/react";
import { useSession } from "next-auth/react";
import Head from "next/head";
import { useRouter } from "next/router";

import Dashboard from "../components/Dashboard";
import Loader from "../components/Loader";

export default function Home() {
	const router = useRouter();
	const { status, data: session } = useSession({
		required: true,
		onUnauthenticated() {
			router.push("/");
		},
	});

	// if (status === "loading") {
	// 	return <Text>Loading....</Text>;
	// }
	// console.log({ session });
	return (
		<Flex h={{ base: "150vh", md: "120vh" }} direction="column" bgGradient="linear(to-b,green,orange)">
			<Head>
				<title>Spotify</title>
				<meta name="description" content="Made by Khoa Sebastian" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main>
				<Dashboard />
			</main>
		</Flex>
	);
}
