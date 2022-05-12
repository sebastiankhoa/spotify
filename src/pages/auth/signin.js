import { useEffect } from "react";
import { Button, Flex, Image } from "@chakra-ui/react";
import Head from "next/head";
import { getProviders, signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";

import Loader from "../../components/Loader";

const Signin = ({ provider }) => {
	const { data: session } = useSession();
	const router = useRouter();

	useEffect(() => {
		if (session) {
			router.push("/");
		}
	}, [session]);

	if (session) return <Loader />;

	return (
		<>
			<Head>
				<title>Spotify Login</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Flex direction="column" h="100vh" bg="black" align="center" justify="center">
				<Image src="/images/logologin.jpeg" alt="loginlogo" h="250px" w="600px" objectFit="cover" />
				{Object.values(provider).map((provi) => (
					<Flex key={provi.name}>
						<Button
							size="lg"
							bg="#1db954"
							color="white"
							py="5"
							px="6"
							onClick={() => signIn(provi.id)}
							_hover={{ opacity: "80%" }}
						>
							Sign in with {provi.name}
						</Button>
					</Flex>
				))}
			</Flex>
		</>
	);
};

export default Signin;

export const getServerSideProps = async () => {
	const provider = await getProviders();
	return {
		props: {
			provider,
		},
	};
};
