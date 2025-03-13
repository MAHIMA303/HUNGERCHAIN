import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet, Alert, ImageBackground, SafeAreaView, TextInput } from 'react-native';

const NgoHomeScreen = ({ navigation }) => {
  const [donations, setDonations] = useState([
    { id: '1', foodType: 'Rice & Curry', quantity: '10 meals', donor: 'John Doe', status: 'Available', location: 'Zone 1', expiresIn: 2, volunteer: null },
    { id: '2', foodType: 'Bread & Jam', quantity: '5 meals', donor: 'Alice Smith', status: 'Available', location: 'Zone 2', expiresIn: 1, volunteer: null }
  ]);

  const [volunteers, setVolunteers] = useState([
    { id: '101', name: 'David', zone: 'Zone 1' },
    { id: '102', name: 'Emma', zone: 'Zone 2' }
  ]);

  const [searchQuery, setSearchQuery] = useState("");

  const requestFood = (id) => {
    setDonations(donations.map(item => item.id === id ? { ...item, status: 'Requested' } : item));
    Alert.alert("Success", "Food requested successfully!");
  };

  const assignVolunteer = (id, zone) => {
    const availableVolunteer = volunteers.find(vol => vol.zone === zone);
    if (!availableVolunteer) {
      Alert.alert("No Volunteer", "No available volunteer for this zone.");
      return;
    }
    
    setDonations(donations.map(item => 
      item.id === id ? { ...item, status: 'Assigned to Volunteer', volunteer: availableVolunteer.name } : item
    ));
    
    Alert.alert("Success", `Volunteer ${availableVolunteer.name} assigned successfully!`);
  };

  const trackDelivery = (id) => {
    Alert.alert("Tracking", `Tracking details for Donation ID: ${id}`);
  };

  const viewLocation = (location) => {
    navigation.navigate("MapScreen", { location });
  };

  const filteredDonations = donations.filter(item =>
    item.foodType.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.donor.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderItem = ({ item }) => (
    <View style={[styles.card, item.expiresIn <= 1 ? styles.expiryWarning : null]}>
      <Text style={styles.foodText}>{item.foodType} - {item.quantity}</Text>
      <Text style={styles.donorText}>Donor: {item.donor}</Text>
      <Text style={styles.status}>Status: {item.status}</Text>
      <Text style={styles.location}>Location: {item.location}</Text>
      <Text style={styles.expiry}>Expires in: {item.expiresIn} days</Text>

      {item.volunteer && <Text style={styles.volunteer}>Volunteer: {item.volunteer}</Text>}
      
      <TouchableOpacity style={styles.mapButton} onPress={() => viewLocation(item.location)}>
        <Text style={styles.buttonText}>View on Map</Text>
      </TouchableOpacity>

      {item.status === 'Available' && (
        <TouchableOpacity style={styles.requestButton} onPress={() => requestFood(item.id)}>
          <Text style={styles.buttonText}>Request Food</Text>
        </TouchableOpacity>
      )}

      {item.status === 'Requested' && (
        <TouchableOpacity style={styles.assignButton} onPress={() => assignVolunteer(item.id, item.location)}>
          <Text style={styles.buttonText}>Assign Volunteer</Text>
        </TouchableOpacity>
      )}

      {item.status === 'Assigned to Volunteer' && (
        <TouchableOpacity style={styles.trackButton} onPress={() => trackDelivery(item.id)}>
          <Text style={styles.buttonText}>Track Delivery</Text>
        </TouchableOpacity>
      )}
    </View>
  );

  return (
    <ImageBackground 
      source={require('../assets/background.jpeg')} 
      style={styles.background} 
      resizeMode="cover"
    >
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.overlay} />
        <View style={styles.container}>
          <Text style={styles.title}>🌟 NGO Dashboard 🌟</Text>
          
          <TextInput
            style={styles.searchBox}
            placeholder="Search donations..."
            placeholderTextColor="#ccc"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />

          <FlatList data={filteredDonations} keyExtractor={item => item.id} renderItem={renderItem} />
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1, 
    width: '100%', 
    height: '100%'
  },
  safeArea: {
    flex: 1,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject, 
    backgroundColor: 'rgba(0, 0, 0, 0.5)' 
  },
  container: { 
    flex: 1, 
    padding: 20 
  },
  title: { 
    fontSize: 26, 
    fontWeight: 'bold', 
    textAlign: 'center', 
    color: '#fff', 
    marginBottom: 15 
  },
  searchBox: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8,
    fontSize: 16,
    marginBottom: 15,
    color: '#333'
  },
  card: { 
    backgroundColor: '#ffffff', 
    padding: 18, 
    borderRadius: 10, 
    marginBottom: 15, 
    elevation: 4, 
    borderLeftWidth: 8, 
    borderLeftColor: '#ff7f50' 
  },
  expiryWarning: { 
    borderLeftColor: 'red', 
    borderWidth: 2 
  },
  foodText: { 
    fontSize: 18, 
    fontWeight: 'bold', 
    color: '#ff4500' 
  },
  donorText: { 
    fontSize: 14, 
    color: '#555', 
    marginVertical: 4 
  },
  status: { 
    fontSize: 14, 
    fontWeight: 'bold', 
    color: 'green' 
  },
  location: { 
    fontSize: 14, 
    color: '#333' 
  },
  expiry: { 
    fontSize: 14, 
    fontWeight: 'bold', 
    color: 'red' 
  },
  volunteer: { 
    fontSize: 14, 
    fontWeight: 'bold', 
    color: '#6a0572' 
  },
  mapButton: { 
    backgroundColor: '#00b4d8', 
    paddingVertical: 12, 
    borderRadius: 8, 
    marginTop: 10, 
    alignItems: 'center' 
  },
  requestButton: { 
    backgroundColor: '#f4a261', 
    paddingVertical: 12, 
    borderRadius: 8, 
    marginTop: 10, 
    alignItems: 'center' 
  },
  assignButton: { 
    backgroundColor: '#2a9d8f', 
    paddingVertical: 12, 
    borderRadius: 8, 
    marginTop: 10, 
    alignItems: 'center' 
  },
  trackButton: { 
    backgroundColor: '#6a0572', 
    paddingVertical: 12, 
    borderRadius: 8, 
    marginTop: 10, 
    alignItems: 'center' 
  },
  buttonText: { 
    color: '#ffffff', 
    fontSize: 16, 
    fontWeight: 'bold' 
  }
});

export default NgoHomeScreen;
