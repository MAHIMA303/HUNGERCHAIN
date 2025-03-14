import React, { useState } from "react";
import { 
  View, Text, TouchableOpacity, FlatList, StyleSheet, Animated, Easing, 
  ImageBackground, Modal, ActivityIndicator, Switch 
} from "react-native";
import { Ionicons } from "@expo/vector-icons"; 

export default function VolunteerHomeScreen() {
  const [requests, setRequests] = useState([
    { id: "1", donor: "Alice", food: "Rice - 10kg", pickup: "Downtown", receiver: "Green Shelter, City Center", status: "Pending" },
    { id: "2", donor: "Bob", food: "Vegetables - 5kg", pickup: "Uptown", receiver: "Hope Foundation, West Side", status: "Pending" },
  ]);
  const [fadeAnim] = useState(new Animated.Value(1));
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const acceptRequest = (id) => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 500,
      easing: Easing.ease,
      useNativeDriver: true,
    }).start(() => {
      setRequests((prevRequests) =>
        prevRequests.map((req) => (req.id === id ? { ...req, status: "Accepted" } : req))
      );
      fadeAnim.setValue(1);
    });

    alert(`✅ You have accepted request ID: ${id}`);
  };

  const refreshRequests = () => {
    setLoading(true);
    setTimeout(() => {
      setRequests([
        { id: "3", donor: "Charlie", food: "Bread - 8 loaves", pickup: "Central Market", receiver: "Food Bank, East Side", status: "Pending" },
        { id: "4", donor: "Diana", food: "Milk - 6 liters", pickup: "South Street", receiver: "Care Shelter, North Side", status: "Pending" },
      ]);
      setLoading(false);
    }, 2000);
  };

  return (
    <ImageBackground 
      source={require("../assets/volunteer.jpeg")} 
      style={styles.background}
      resizeMode="cover"
    >
      <View style={[styles.overlay, isDarkMode && styles.darkOverlay]}>
        {/* Dark Mode Toggle */}
        <View style={styles.toggleContainer}>
          <Text style={[styles.toggleText, isDarkMode && styles.darkText]}>
            {isDarkMode ? "Dark Mode" : "Light Mode"}
          </Text>
          <Switch
            value={isDarkMode}
            onValueChange={() => setIsDarkMode(!isDarkMode)}
          />
        </View>

        <Text style={[styles.title, isDarkMode && styles.darkText]}>Welcome, Volunteer! 🚛</Text>

        {/* Refresh Button */}
        <TouchableOpacity style={styles.refreshButton} onPress={refreshRequests}>
          <Ionicons name="refresh" size={24} color="white" />
          <Text style={styles.refreshText}>Refresh Requests</Text>
        </TouchableOpacity>

        {loading ? (
          <ActivityIndicator size="large" color="#3498db" style={{ marginTop: 20 }} />
        ) : requests.length > 0 ? (
          <FlatList
            data={requests}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => { setSelectedRequest(item); setModalVisible(true); }}>
                <Animated.View style={[styles.card, isDarkMode && styles.darkCard, { opacity: fadeAnim }]}> 
                  <View style={styles.row}>
                    <Ionicons name="person-circle" size={22} color="#6a11cb" />
                    <Text style={[styles.text, isDarkMode && styles.darkText]}>
                      <Text style={styles.bold}>Donor:</Text> {item.donor}
                    </Text>
                  </View>
                  <View style={styles.row}>
                    <Ionicons name="fast-food" size={22} color="#f39c12" />
                    <Text style={[styles.text, isDarkMode && styles.darkText]}>
                      <Text style={styles.bold}>Food:</Text> {item.food}
                    </Text>
                  </View>
                  <View style={styles.row}>
                    <Ionicons name="location" size={22} color="#e74c3c" />
                    <Text style={[styles.text, isDarkMode && styles.darkText]}>
                      <Text style={styles.bold}>Pickup:</Text> {item.pickup}
                    </Text>
                  </View>
                  <Text style={styles.status}>{item.status}</Text>
                  <TouchableOpacity 
                    style={styles.button} 
                    onPress={() => acceptRequest(item.id)}
                    activeOpacity={0.8}
                  >
                    <Text style={styles.buttonText}>Accept Delivery</Text>
                  </TouchableOpacity>
                </Animated.View>
              </TouchableOpacity>
            )}
          />
        ) : (
          <Text style={[styles.noRequests, isDarkMode && styles.darkText]}>No available deliveries at the moment.</Text>
        )}
      </View>

      {/* Request Details Modal */}
      {selectedRequest && (
        <Modal visible={modalVisible} transparent animationType="slide">
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Request Details</Text>
              <Text>📍 Pickup: {selectedRequest.pickup}</Text>
              <Text>🏠 Receiver: {selectedRequest.receiver}</Text>
              <Text>🍴 Food: {selectedRequest.food}</Text>
              <Text>👤 Donor: {selectedRequest.donor}</Text>
              <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.modalButton}>
                <Text style={styles.modalButtonText}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      )}
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: { flex: 1, width: "100%", height: "100%" },
  overlay: { flex: 1, paddingTop: 50, alignItems: "center", backgroundColor: "rgba(255, 255, 255, 0.85)" },
  darkOverlay: { backgroundColor: "rgba(0, 0, 0, 0.85)" },
  title: { fontSize: 28, fontWeight: "bold", color: "#2c3e50", marginBottom: 20 },
  darkText: { color: "#ffffff" },
  card: { width: "90%", padding: 20, marginVertical: 10, backgroundColor: "#ffffff", borderRadius: 15 },
  darkCard: { backgroundColor: "#333" },
  text: { fontSize: 18, marginLeft: 8 },
  bold: { fontWeight: "bold", color: "#3498db" },
  status: { fontSize: 14, color: "#e74c3c", fontWeight: "bold" },
  button: { backgroundColor: "#3498db", padding: 12, borderRadius: 8, marginTop: 15 },
  buttonText: { color: "#fff", fontSize: 18, fontWeight: "bold" },
  refreshButton: { flexDirection: "row", backgroundColor: "#3498db", padding: 10, borderRadius: 5, marginBottom: 10 },
  refreshText: { color: "white", fontSize: 16, marginLeft: 5 },
  toggleContainer: { flexDirection: "row", alignItems: "center", marginBottom: 10 },
  toggleText: { fontSize: 16, marginRight: 10 },
  modalContainer: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "rgba(0,0,0,0.5)" },
  modalContent: { backgroundColor: "white", padding: 20, borderRadius: 10, width: "80%", alignItems: "center" },
  modalButton: { marginTop: 10, padding: 10, backgroundColor: "#3498db", borderRadius: 5 },
  modalButtonText: { color: "white", fontSize: 16 },
});

