import * as React from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  ImageBackground,
  Button,
  SafeAreaView,
  Text,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Video } from "expo-av";

const Stack = createNativeStackNavigator();

const WelcomeScreen = ({ navigation }) => {
  return (
    <ImageBackground
      style={styles.startBackground}
      source={require("./assets/start.png")}
    >
      <TouchableWithoutFeedback onPress={() => navigation.navigate("Play")}>
        <Image
          style={styles.playButton}
          source={require("./assets/PLAY.png")}
        />
      </TouchableWithoutFeedback>
    </ImageBackground>
  );
};

const PlayGameScreen = ({ navigation }) => {
  return (
    <ImageBackground
      style={styles.playBackground}
      source={require("./assets/play1.png")}
    />
  );
};

const LosingScreen = ({ navigation }) => {
  return (
    <ImageBackground
      style={styles.endBackground}
      source={require("./assets/L.png")}
    >
      <SafeAreaView style={styles.endBackground}>
        <Button
          title="click here for a consolation prize"
          color="black"
          onPress={() => navigation.navigate("Rick")}
        />
      </SafeAreaView>
    </ImageBackground>
  );
};

const WinningScreen = ({ navigation }) => {
  return (
    <ImageBackground
      style={styles.endBackground}
      source={require("./assets/W.png")}
    >
      <SafeAreaView style={styles.endBackground}>
        <Button
          title="click here for a prize"
          color="black"
          onPress={() => navigation.navigate("Rick")}
        />
      </SafeAreaView>
    </ImageBackground>
  );
};

function RickRoll() {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  return (
    <SafeAreaView style={styles.rickBackground}>
      <Video
        ref={video}
        style={styles.video}
        source={require("./assets/rick.mp4")}
        useNativeControls
        resizeMode="contain"
        isLooping
        onPlaybackStatusUpdate={setStatus}
      />
    </SafeAreaView>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Play" component={PlayGameScreen} />
        <Stack.Screen name="Lose" component={LosingScreen} />
        <Stack.Screen name="Win" component={WinningScreen} />
        <Stack.Screen name="Rick" component={RickRoll} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  startBackground: {
    flex: 1,
    alignItems: "center",
    justifyContent: "61.6%",
  },
  playButton: {
    top: 525,
  },
  playBackground: {
    flex: 1,
  },
  endBackground: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  consolationButton: {
    top: 200,
  },
  rickBackground: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  video: {
    flex: 1,
    alignSelf: "stretch",
  },
});
