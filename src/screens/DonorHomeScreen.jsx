import React, { useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";


const topDonors = [
  { id: "1", name: "Amit", donations: 25 },
  { id: "2", name: "Priya", donations: 18 },
  { id: "3", name: "Rahul", donations: 15 },
];

export default function DonorHomePage() {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      confettiRef && confettiRef.start();
    }, 1000);
  }, []);

  return (
    <View style={styles.container}>
      {/* Confetti Effect */}
      <ConfettiCannon ref={(ref) => (confettiRef = ref)} count={50} origin={{ x: 180, y: 0 }} fadeOut={true} />
      
      {/* Top Donors Section */}
      <View style={styles.donorBoard}>
        <Text style={styles.donorTitle}>🏆 Top Donors of the Week</Text>
        <FlatList
          data={topDonors}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Text style={styles.donorText}>✨ {item.name}: {item.donations} donations</Text>
          )}
        />
      </View>
      
      {/* Background Image */}
      <Image source={require("../assets/food_donation.jpeg")} style={styles.image} />
      
      {/* Emotional Quote */}
      <Text style={styles.quote}>“Hunger is not an issue of charity. It is an issue of justice.” – Jacques Diouf</Text>
      
      {/* Glass Effect Buttons */}
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("DonorDonationScreen")}>
        <Text style={styles.buttonText}>🍽 Donate Now</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("TrackRequests")}> 
        <Text style={styles.buttonText}>📍 Track Requests</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("ViewHistory")}> 
        <Text style={styles.buttonText}>📜 View History</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#f8f9fa",
  },
  donorBoard: {
    backgroundColor: "#FFD700",
    padding: 10,
    width: "90%",
    borderRadius: 10,
    marginTop: 20,
    alignItems: "center",
  },
  donorTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#8B0000",
  },
  donorText: {
    fontSize: 16,
    color: "#333",
  },
  image: {
    width: "90%",
    height: 150,
    marginTop: 10,
    borderRadius: 10,
  },
  quote: {
    fontStyle: "italic",
    fontSize: 14,
    color: "#555",
    textAlign: "center",
    marginVertical: 10,
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 20,
    marginVertical: 5,
    width: "85%",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    backdropFilter: "blur(10px)",
  },
  buttonText: {
    color: "#2D9CDB",
    fontSize: 18,
    fontWeight: "bold",
  },
});