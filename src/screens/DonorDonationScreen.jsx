import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

const DonorDonationScreen = () => {
  const [donation, setDonation] = useState({
    donorName: "",
    contactNumber: "",
    foodItem: "",
    quantity: "",
    expiryDate: "",
    pickupLocation: "",
    foodType: "Cooked",
    foodCategory: "Veg",
    pickupTime: "Morning",
    additionalNotes: ""
  });

  const handleChange = (name, value) => {
    setDonation({ ...donation, [name]: value });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🍲 Food Donation Form</Text>
      <TextInput placeholder="Donor Name" style={styles.input} onChangeText={(text) => handleChange("donorName", text)} />
      <TextInput placeholder="Contact Number" style={styles.input} keyboardType="numeric" onChangeText={(text) => handleChange("contactNumber", text)} />
      <TextInput placeholder="Food Item" style={styles.input} onChangeText={(text) => handleChange("foodItem", text)} />
      <TextInput placeholder="Quantity (in kg)" style={styles.input} keyboardType="numeric" onChangeText={(text) => handleChange("quantity", text)} />
      <TextInput placeholder="Food Expiry Date (YYYY-MM-DD)" style={styles.input} onChangeText={(text) => handleChange("expiryDate", text)} />
      <TextInput placeholder="Pickup Location" style={styles.input} onChangeText={(text) => handleChange("pickupLocation", text)} />
      
      <Text style={styles.label}>Select Food Type:</Text>
      <View style={styles.radioContainer}>
        <TouchableOpacity onPress={() => handleChange("foodType", "Cooked")}
          style={[styles.radioButton, donation.foodType === "Cooked" && styles.selectedButton]}>
          <Text>Cooked Food</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleChange("foodType", "Raw")}
          style={[styles.radioButton, donation.foodType === "Raw" && styles.selectedButton]}>
          <Text>Raw Ingredients</Text>
        </TouchableOpacity>
      </View>
      
      <Text style={styles.label}>Veg or Non-Veg:</Text>
      <View style={styles.radioContainer}>
        <TouchableOpacity onPress={() => handleChange("foodCategory", "Veg")}
          style={[styles.radioButton, donation.foodCategory === "Veg" && styles.selectedButton]}>
          <Text>Veg</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleChange("foodCategory", "Non-Veg")}
          style={[styles.radioButton, donation.foodCategory === "Non-Veg" && styles.selectedButton]}>
          <Text>Non-Veg</Text>
        </TouchableOpacity>
      </View>
      
      <Text style={styles.label}>Pickup Timing:</Text>
      <View style={styles.radioContainer}>
        <TouchableOpacity onPress={() => handleChange("pickupTime", "Morning")}
          style={[styles.radioButton, donation.pickupTime === "Morning" && styles.selectedButton]}>
          <Text>Morning</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleChange("pickupTime", "Afternoon")}
          style={[styles.radioButton, donation.pickupTime === "Afternoon" && styles.selectedButton]}>
          <Text>Afternoon</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleChange("pickupTime", "Evening")}
          style={[styles.radioButton, donation.pickupTime === "Evening" && styles.selectedButton]}>
          <Text>Evening</Text>
        </TouchableOpacity>
      </View>
      
      <TextInput placeholder="Additional Notes (Optional)" style={styles.input} onChangeText={(text) => handleChange("additionalNotes", text)} />
      
      <TouchableOpacity style={styles.submitButton}>
        <Text style={styles.submitText}>Submit Donation</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#FFE4E1" },
  title: { fontSize: 24, fontWeight: "bold", textAlign: "center", marginBottom: 10 },
  input: { backgroundColor: "white", padding: 10, marginVertical: 5, borderRadius: 8 },
  label: { fontWeight: "bold", marginTop: 10 },
  radioContainer: { flexDirection: "row", justifyContent: "space-between", marginVertical: 5 },
  radioButton: { padding: 10, backgroundColor: "white", borderRadius: 8, flex: 1, alignItems: "center", marginHorizontal: 5 },
  selectedButton: { backgroundColor: "#FFC0CB" },
  submitButton: { backgroundColor: "rgba(255, 192, 203, 0.6)", padding: 15, borderRadius: 15, alignItems: "center", marginTop: 20, shadowColor: "#000", shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.3, shadowRadius: 5, elevation: 5 },
  submitText: { fontSize: 16, fontWeight: "bold" }
});

export default DonorDonationScreen;
