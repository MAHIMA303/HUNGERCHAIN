import React, { useState } from "react";
import { 
  View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ScrollView 
} from "react-native";

const DonorScreen = ({ navigation }) => {
  const [donorData, setDonorData] = useState({
    name: "",
    country: "",
    state: "",
    city: "",
    street: "",
    pincode: "",
  });

  const handleChange = (field, value) => {
    setDonorData({ ...donorData, [field]: value });
  };

  const handleSubmit = () => {
    if (
      !donorData.name ||
      !donorData.country ||
      !donorData.state ||
      !donorData.city ||
      !donorData.street ||
      !donorData.pincode 
    ) {
      Alert.alert("Missing Information", "Please fill in all fields.");
      return;
    }
    navigation.navigate("DonorHomeScreen");
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Donor Registration</Text>

      <TextInput
        style={styles.input}
        placeholder="Full Name"
        placeholderTextColor="#888"
        value={donorData.name}
        onChangeText={(text) => handleChange("name", text)}
      />

      <Text style={styles.sectionTitle}>Address</Text>

      <TextInput
        style={styles.input}
        placeholder="Country"
        placeholderTextColor="#888"
        value={donorData.country}
        onChangeText={(text) => handleChange("country", text)}
      />

      <TextInput
        style={styles.input}
        placeholder="State"
        placeholderTextColor="#888"
        value={donorData.state}
        onChangeText={(text) => handleChange("state", text)}
      />

      <TextInput
        style={styles.input}
        placeholder="City"
        placeholderTextColor="#888"
        value={donorData.city}
        onChangeText={(text) => handleChange("city", text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Street"
        placeholderTextColor="#888"
        value={donorData.street}
        onChangeText={(text) => handleChange("street", text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Pincode"
        placeholderTextColor="#888"
        keyboardType="numeric"
        value={donorData.pincode}
        onChangeText={(text) => handleChange("pincode", text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Food Details"
        placeholderTextColor="#888"
        value={donorData.foodDetails}
        onChangeText={(text) => handleChange("foodDetails", text)}
      />

      <Text style={styles.sectionTitle}>Upload ID Proof & Photo</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter ID Proof URL"
        placeholderTextColor="#888"
        value={donorData.idProof}
        onChangeText={(text) => handleChange("idProof", text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Enter Photo URL"
        placeholderTextColor="#888"
        value={donorData.photo}
        onChangeText={(text) => handleChange("photo", text)}
      />

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Sign In</Text>
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
    color: "#ff9800",
    marginBottom: 20,
    textAlign: "center",
  },
  sectionTitle: {
    fontSize: 20,
    color: "#ff9800",
    marginTop: 15,
    marginBottom: 5,
    alignSelf: "flex-start",
  },
  input: {
    width: "100%",
    padding: 12,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: "#555",
    borderRadius: 8,
    backgroundColor: "#222",
    color: "#fff",
  },
  button: {
    backgroundColor: "#ff9800",
    padding: 15,
    borderRadius: 8,
    width: "100%",
    alignItems: "center",
    marginTop: 15,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default DonorScreen;
