import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "../screens/LoginScreen";
import DonorScreen from "../screens/DonorScreen";
import NgoScreen from "../screens/NgoScreen";
import VolunteerScreen from "../screens/VolunteerScreen";
import AdminScreen from "../screens/AdminScreen";
import HomeScreen from "../screens/HomeScreen";

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="DonorScreen" component={DonorScreen} />
        <Stack.Screen name="NgoScreen" component={NgoScreen} />
        <Stack.Screen name="VolunteerScreen" component={VolunteerScreen} />
        <Stack.Screen name="AdminScreen" component={AdminScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
