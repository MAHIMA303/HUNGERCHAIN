import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to HungerChain</Text>
      <Text style={styles.subtitle}>Select Your Role to Proceed</Text>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("NgoScreen")}>
        <Text style={styles.buttonText}>NGO</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("DonorScreen")}>
        <Text style={styles.buttonText}>Donor</Text>
      </TouchableOpacity>

      

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("VolunteerScreen")}>
        <Text style={styles.buttonText}>Volunteer</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("AdminScreen")}>
        <Text style={styles.buttonText}>Admin</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#121212",
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#ff9800",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: "#fff",
    marginBottom: 30,
  },
  button: {
    backgroundColor: "#ff9800",
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
    width: "80%",
    alignItems: "center",
    marginVertical: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default LoginScreen;
