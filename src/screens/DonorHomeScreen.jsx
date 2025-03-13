import React, { useState, useEffect } from "react";
import { 
  View, Text, ImageBackground, TouchableOpacity, 
  StyleSheet, Animated, Easing 
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

const DonorHomeScreen = ({ navigation }) => {
  const [fallingEmojis, setFallingEmojis] = useState([]);
  const [showDonors, setShowDonors] = useState(false);
  const pulseAnim = new Animated.Value(1); // For pulsating effect

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(pulseAnim, {
          toValue: 1.2,
          duration: 800,
          easing: Easing.ease,
          useNativeDriver: true,
        }),
        Animated.timing(pulseAnim, {
          toValue: 1,
          duration: 800,
          easing: Easing.ease,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);

  const handleImpactClick = () => {
    setShowDonors(true);
    const newEmojis = [];
    for (let i = 0; i < 30; i++) {
      newEmojis.push({
        id: Math.random().toString(),
        emoji: ["✨", "🎉", "🍽️"][Math.floor(Math.random() * 3)],
        xPosition: Math.random() * 60 + 20, // Random position with spacing
        fallAnimation: new Animated.Value(0),
      });
    }
    setFallingEmojis(newEmojis);

    newEmojis.forEach((emoji) => {
      Animated.timing(emoji.fallAnimation, {
        toValue: 600, // Falls down
        duration: 4000,
        useNativeDriver: false, // Cannot use native driver for layout-based animation
      }).start();
    });

    setTimeout(() => setFallingEmojis([]), 4000);
  };

  return (
    <ImageBackground 
      source={require("../assets/food_donation.jpeg")}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        {/* Impact Button */}
        <TouchableOpacity style={styles.impactButton} onPress={handleImpactClick}>
          <Text style={styles.impactText}>✨ Donations Impact: 10,245 Meals Served! ✨</Text>
        </TouchableOpacity>

        {/* Falling Emojis */}
        {fallingEmojis.map((emoji) => (
          <Animated.Text
            key={emoji.id}
            style={{
              position: "absolute",
              top: emoji.fallAnimation,
              left: emoji.xPosition + "%", // Fixed syntax
              fontSize: 24,
            }}
          >
            {emoji.emoji}
          </Animated.Text>
        ))}

        {/* Floating Leaderboard Button */}
        <TouchableOpacity 
          style={styles.leaderboardButton} 
          onPress={() => setShowDonors(!showDonors)}
        >
          <FontAwesome5 name="trophy" size={18} color="#fff" />
          <Text style={styles.leaderboardText}> Leaderboard</Text>
        </TouchableOpacity>

        {/* Scoreboard - Only shows when button is clicked */}
        {showDonors && (
          <View style={styles.scoreBoard}>
            {[
              { name: "John Doe", donations: 50 },
              { name: "Jane Smith", donations: 40 },
              { name: "Alice Brown", donations: 35 }
            ].map((donor, index) => (
              <View key={index} style={styles.donorCard}>
                <Text style={styles.donorName}>{donor.name}</Text>
                <Text style={styles.donorCount}>Donations: {donor.donations}</Text>
              </View>
            ))}
          </View>
        )}

        {/* Buttons */}
        <View style={styles.buttonContainer}>
          <Animated.View style={[styles.glassButton, { transform: [{ scale: pulseAnim }] }]}>
            <TouchableOpacity onPress={() => navigation.navigate("DonorDonationScreen")}>
              <FontAwesome5 name="utensils" size={16} color="#fff" />
              <Text style={styles.shiningText}> Donate Now</Text>
            </TouchableOpacity>
          </Animated.View>

          <TouchableOpacity style={styles.glassButton}>
            <FontAwesome5 name="map-marker-alt" size={16} color="#fff" />
            <Text style={styles.shiningText}> Track Requests</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.glassButton}>
            <FontAwesome5 name="history" size={16} color="#fff" />
            <Text style={styles.shiningText}> View History</Text>
          </TouchableOpacity>
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
    backgroundColor: "rgba(255, 180, 180, 0.6)",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  impactButton: {
    padding: 15,
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    borderRadius: 10,
    marginBottom: 20,
    elevation: 8,
  },
  impactText: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#000",
    textAlign: "center",
  },
  scoreBoard: {
    width: "80%",
    alignItems: "center",
    marginBottom: 20,
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    padding: 15,
    borderRadius: 15,
    elevation: 8,
  },
  donorCard: {
    alignItems: "center",
    marginBottom: 10,
  },
  donorName: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 5,
  },
  donorCount: {
    fontSize: 14,
    color: "gray",
  },
  buttonContainer: {
    width: "80%",
    alignItems: "center",
  },
  glassButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    padding: 12,
    borderRadius: 25,
    width: "100%",
    justifyContent: "center",
    marginBottom: 10,
    elevation: 5,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.5)",
  },
  shiningText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "black",
    textShadowColor: "rgba(255, 255, 255, 0.8)",
    textShadowOffset: { width: 1, height: 1 }, 
    textShadowRadius: 5,
  },
  leaderboardButton: {
    position: "absolute",
    top: 60,
    right: 20,
    backgroundColor: "#ff9800",
    padding: 10,
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  leaderboardText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
    marginLeft: 5,
  },
});

export default DonorHomeScreen;
