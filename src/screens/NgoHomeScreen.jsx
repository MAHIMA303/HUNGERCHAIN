import React from "react";
import { View, StyleSheet } from "react-native";
import { WebView } from "react-native-webview";

const NgoHomeScreen = () => {
  const GOOGLE_MAPS_URL = `https://www.google.com/maps/embed/v1/place?key=AlzaSy82pTvB0qdJK_7QzmxmBzcXcCmfTt6Rjfk&q=37.78825,-122.4324`;

  return (
    <View style={styles.container}>
      <WebView source={{ uri: GOOGLE_MAPS_URL }} style={styles.map} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});

export default NgoHomeScreen;
