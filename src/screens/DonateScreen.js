import React from "react";
import { View, Text, StyleSheet } from "react-native";

const DonateScreen = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Welcome to the Donation Page!</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
  },
});

export default DonateScreen;
