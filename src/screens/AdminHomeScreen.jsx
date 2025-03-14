import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const AdminHomeScreen = () => {
  const navigation = useNavigation();

  // Sample Data for Pending Donations
  const [pendingDonations, setPendingDonations] = useState([
    { id: "1", donor: "Alice", food: "Pizza & Juice", status: "Pending" },
    { id: "2", donor: "Bob", food: "Rice & Vegetables", status: "Pending" },
  ]);

  // Function to Approve Donations
  const handleApproval = (id) => {
    setPendingDonations(pendingDonations.filter((donation) => donation.id !== id));
  };

  // Function to Reject Donations
  const handleRejection = (id) => {
    setPendingDonations(pendingDonations.filter((donation) => donation.id !== id));
  };

  return (
    <ImageBackground
      source={require("../assets/background.png")} // Ensure correct path
      style={styles.background}
    >
      <View style={styles.overlay}>
        <View style={styles.container}>
          {/* Header */}
          <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Text style={styles.backText}>🔙</Text>
            </TouchableOpacity>
            <Text style={styles.headerText}>Admin Dashboard</Text>
          </View>

          {/* Navigation Buttons */}
          <View style={styles.navButtons}>
            <TouchableOpacity
              style={[styles.navButton, styles.donorButton]}
              onPress={() => navigation.navigate("DonorHomeScreen")}
            >
              <Text style={styles.navIcon}>👥</Text>
              <Text style={styles.navButtonText}>Donors</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.navButton, styles.recipientButton]}
              onPress={() => navigation.navigate("NgoHomeScreen")}
            >
              <Text style={styles.navIcon}>🏢</Text>
              <Text style={styles.navButtonText}>Recipients</Text>
            </TouchableOpacity>
          </View>

          {/* Pending Donations Section */}
          <Text style={styles.sectionTitle}>Pending Donations</Text>
          <FlatList
            data={pendingDonations}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.card}>
                <View>
                  <Text style={styles.donorName}>{item.donor}</Text>
                  <Text style={styles.foodText}>{item.food}</Text>
                </View>
                <View style={styles.actionButtons}>
                  <TouchableOpacity
                    onPress={() => handleApproval(item.id)}
                    style={styles.approveButton}
                  >
                    <Text style={styles.buttonText}>Approve</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => handleRejection(item.id)}
                    style={styles.rejectButton}
                  >
                    <Text style={styles.buttonText}>Reject</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
          />
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.3)",
  },
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    backgroundColor: "rgba(181, 252, 252, 0.5)",
    borderRadius: 10,
    elevation: 5,
  },
  backText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#6B7280",
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginLeft: 15,
  },
  navButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 20,
  },
  navButton: {
    padding: 15,
    width: "48%",
    borderRadius: 15,
    alignItems: "center",
    elevation: 5,
  },
  donorButton: {
    backgroundColor: "#74FEF2",
  },
  recipientButton: {
    backgroundColor: "#EF4444",
  },
  navIcon: {
    fontSize: 30,
    color: "white",
  },
  navButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    marginTop: 5,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    marginTop: 20,
  },
  card: {
    marginTop: 10,
    padding: 15,
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    borderRadius: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    elevation: 3,
  },
  donorName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  foodText: {
    color: "#6B7280",
  },
  actionButtons: {
    flexDirection: "row",
    gap: 10,
  },
  approveButton: {
    padding: 10,
    backgroundColor: "#10B981",
    borderRadius: 10,
  },
  rejectButton: {
    padding: 10,
    backgroundColor: "#EF4444",
    borderRadius: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default AdminHomeScreen;
