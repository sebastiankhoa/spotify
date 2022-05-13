import { Flex, Box } from "@chakra-ui/react";
import SpotifyWebApi from "spotify-web-api-node";
import { useRecoilState } from "recoil";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";

import Sidebar from "./Sidebar";
import Body from "./Body";
import Right from "./Right";
import BeautyBox from "./BeautyBox";
import { playerTrackState } from "../atom/playerAtom";
import Player from "./Player";

//Use SpotifyApi
const SpotifyApi = new SpotifyWebApi({
	clientId: process.env.SPOTIFY_CLIENT_ID,
	clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
});

const Dashboard = () => {
	//Get accessToken
	const { data: session } = useSession();
	const { accessToken } = session;

	const [showPlayer, setShowPlayer] = useState(false);

	useEffect(() => {
		setShowPlayer(true);
	}, []);

	useEffect(() => {
		if (!accessToken) return;
		SpotifyApi.setAccessToken(accessToken);
	}, [accessToken]);

	//set track which playing to chooseTrack
	const [playTrack, setPlayTrack] = useRecoilState(playerTrackState);
	const chooseTrack = (track) => {
		setPlayTrack(track);
	};

	// console.log("[uri from Dashboard:]", playTrack.uri);
	return (
		<main>
			<Flex w="100vw">
				<Sidebar />
				<Body spotify={SpotifyApi} chooseTrack={chooseTrack} />
				<Right SpotifyApi={SpotifyApi} chooseTrack={chooseTrack} />
				{showPlayer && (
					<Flex pos="fixed" bottom="0" left="0" right="0" zIndex="50">
						<Player token={accessToken} uriTrack={playTrack.uri} />
					</Flex>
				)}
			</Flex>
		</main>
	);
};

export default Dashboard;
