import React from "react";
import { View, Text, StyleSheet } from "react-native";

const VolunteerHomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome, Volunteer!</Text>
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
  text: {
    fontSize: 24,
    color: "#fff",
    fontWeight: "bold",
  },
});

export default VolunteerHomeScreen;
