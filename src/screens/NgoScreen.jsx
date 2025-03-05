import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";

const NgoScreen = () => {
  const navigation = useNavigation();

  const [ngoDetails, setNgoDetails] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    address: "",
    pincode: "",
    state: "",
    country: "",
    organization: "",
  });

  const handleChange = (key, value) => {
    setNgoDetails({ ...ngoDetails, [key]: value });
  };

  const handleSignUp = () => {
    console.log("NGO Details:", ngoDetails);
    // Navigate to NgoHomeScreen after submission
    navigation.navigate("NgoHomeScreen");
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>NGO Sign Up</Text>

      {/** Form Fields **/}
      {Object.keys(ngoDetails).map((key) => (
        <View key={key} style={styles.formGroup}>
          <Text style={styles.label}>{key.charAt(0).toUpperCase() + key.slice(1)}</Text>
          <TextInput
            style={styles.input}
            placeholder={`Enter ${key}`}
            placeholderTextColor="#aaa"
            secureTextEntry={key === "password"} // Hide password
            keyboardType={key === "phone" || key === "pincode" ? "numeric" : "default"}
            onChangeText={(text) => handleChange(key, text)}
          />
        </View>
      ))}

      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Register NGO</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: "#121212",
    alignItems: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#ff6600",
    marginBottom: 20,
    textAlign: "center",
  },
  formGroup: {
    width: "100%",
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    color: "#ff6600",
    marginBottom: 5,
    fontWeight: "bold",
  },
  input: {
    width: "100%",
    backgroundColor: "#222",
    color: "#fff",
    padding: 12,
    borderRadius: 8,
    fontSize: 16,
  },
  button: {
    backgroundColor: "#ff6600",
    padding: 15,
    borderRadius: 8,
    width: "100%",
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default NgoScreen;
