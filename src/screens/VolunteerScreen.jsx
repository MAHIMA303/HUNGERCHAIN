import React, { useState } from "react";
import { 
  View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Alert, KeyboardAvoidingView, Platform
} from "react-native";

const VolunteerScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [pincode, setPincode] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [experience, setExperience] = useState("");
  const [availability, setAvailability] = useState("");

  const handleSubmit = () => {
    if (!name || !email || !phone || !address || !pincode || !country || !state) {
      Alert.alert("Error", "Please fill all required fields.");
      return;
    }
    navigation.navigate("VolunteerHomeScreen");
  };

  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1 }} contentContainerStyle={styles.scrollContainer} keyboardShouldPersistTaps="handled">
        <View style={styles.innerContainer}>
          <Text style={styles.title}>Volunteer Registration</Text>
          
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Full Name</Text>
            <TextInput
              style={styles.input}
              value={name}
              onChangeText={setName}
            />
          </View>
    
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Email</Text>
            <TextInput
              style={styles.input}
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
            />
          </View>
    
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Phone Number</Text>
            <TextInput
              style={styles.input}
              value={phone}
              onChangeText={setPhone}
              keyboardType="phone-pad"
            />
          </View>
    
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Address</Text>
            <TextInput
              style={styles.input}
              value={address}
              onChangeText={setAddress}
            />
          </View>
    
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Pincode</Text>
            <TextInput
              style={styles.input}
              value={pincode}
              onChangeText={setPincode}
              keyboardType="numeric"
            />
          </View>
    
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Country</Text>
            <TextInput
              style={styles.input}
              value={country}
              onChangeText={setCountry}
            />
          </View>
    
          <View style={styles.inputContainer}>
            <Text style={styles.label}>State</Text>
            <TextInput
              style={styles.input}
              value={state}
              onChangeText={setState}
            />
          </View>
          
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Experience (if any)</Text>
            <TextInput
              style={styles.input}
              value={experience}
              onChangeText={setExperience}
            />
          </View>
    
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Availability (Weekdays/Weekends)</Text>
            <TextInput
              style={styles.input}
              value={availability}
              onChangeText={setAvailability}
            />
          </View>
          
          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#121212",
    paddingTop: 50,
    paddingBottom: 150,
    paddingHorizontal: 20,
  },
  innerContainer: {
    width: "100%",
    alignItems: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 20,
  },
  inputContainer: {
    width: "100%",
    marginBottom: 10,
  },
  label: {
    color: "#fff",
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    width: "100%",
    padding: 12,
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
    marginTop: 20,
    marginBottom: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default VolunteerScreen;