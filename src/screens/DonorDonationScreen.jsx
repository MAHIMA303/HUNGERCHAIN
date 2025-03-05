import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

export default function DonorDonationScreen() {
  const [foodItem, setFoodItem] = useState("");
  const [quantity, setQuantity] = useState("");
  const [location, setLocation] = useState("");

  const handleSubmit = () => {
    if (foodItem && quantity && location) {
      alert("Donation Submitted Successfully! 🎉");
      setFoodItem("");
      setQuantity("");
      setLocation("");
    } else {
      alert("Please fill all fields!");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Food Donation Form 🍽️</Text>

      <TextInput
        style={styles.input}
        placeholder="Food Item"
        value={foodItem}
        onChangeText={setFoodItem}
      />
      <TextInput
        style={styles.input}
        placeholder="Quantity (in kg)"
        value={quantity}
        keyboardType="numeric"
        onChangeText={setQuantity}
      />
      <TextInput
        style={styles.input}
        placeholder="Pickup Location"
        value={location}
        onChangeText={setLocation}
      />

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit Donation</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f8f9fa",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#27AE60",
    marginBottom: 10,
  },
  input: {
    width: "80%",
    padding: 12,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    backgroundColor: "#fff",
  },
  button: {
    backgroundColor: "#27AE60",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
