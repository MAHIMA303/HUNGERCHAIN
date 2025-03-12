import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';

import AdminHomeScreen from './screens/AdminHomeScreen';
import AdminScreen from './screens/AdminScreen';
import DonorDonationScreen from './screens/DonorDonationScreen';
import DonorHomeScreen from './screens/DonorHomeScreen';
import DonorScreen from './screens/DonorScreen';
import LoginScreen from './screens/LoginScreen';
import NgoHomeScreen from './screens/NgoHomeScreen';
import NgoScreen from './screens/NgoScreen';
import SignInScreen from './screens/SignInScreen';
import VolunteerHomeScreen from './screens/VolunteerHomeScreen';
import VolunteerScreen from './screens/VolunteerScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="AdminHome" component={AdminHomeScreen} />
        <Stack.Screen name="Admin" component={AdminScreen} />
        <Stack.Screen name="DonorHome" component={DonorHomeScreen} />
        <Stack.Screen name="Donor" component={DonorScreen} />
        <Stack.Screen name="DonorDonation" component={DonorDonationScreen} />
        <Stack.Screen name="NgoHome" component={NgoHomeScreen} />
        <Stack.Screen name="Ngo" component={NgoScreen} />
        <Stack.Screen name="VolunteerHome" component={VolunteerHomeScreen} />
        <Stack.Screen name="Volunteer" component={VolunteerScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
