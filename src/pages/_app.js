import "../styles/globals.css";
import { RecoilRoot } from "recoil";
import { ChakraProvider } from "@chakra-ui/react";
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
	return (
		<ChakraProvider>
			<SessionProvider session={session}>
				<RecoilRoot>
					<Component {...pageProps} />
				</RecoilRoot>
			</SessionProvider>
		</ChakraProvider>
	);
}

export default MyApp;
