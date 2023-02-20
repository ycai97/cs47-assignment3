import { StyleSheet, SafeAreaView, Text, Pressable } from "react-native";
import { useSpotifyAuth } from "./utils";
import { Themes } from "./assets/Themes";
import SpotifyAuthButton from "./components/SpotifyAuthButton";
import SongList from "./components/SongList";

export default function App() {
  // Pass in true to useSpotifyAuth to use the album ID (in env.js) instead of top tracks
  const { token, tracks, getSpotifyAuth } = useSpotifyAuth(true);

  // console.log("token: ", token);
  // console.log("tracks", tracks);

  let songIndex = 0;

  for (let i = 0; i < tracks.length; i++) {
    songIndex += 1;
    tracks[i]["songIndex"] = songIndex;
  }

  let contentDisplayed = null;
  
  if (token) {
    contentDisplayed = <SongList tracks={tracks} />
  } else {
    contentDisplayed = <SpotifyAuthButton authFunc={getSpotifyAuth} />;
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* TODO: Your code goes here */}
      {contentDisplayed}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Themes.colors.background,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});
