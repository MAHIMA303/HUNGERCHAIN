import React from "react";
import { View, Text, StyleSheet } from "react-native";

const NgoHomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome Ngo</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#121212",
  },
  title: {
    fontSize: 24,
    color: "#fff",
    fontWeight: "bold",
  },
});

export default NgoHomeScreen;
