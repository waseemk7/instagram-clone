// App.js

import React from "react";
import { Image } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons } from "@expo/vector-icons"; // For icons

import HomeScreen from "./src/screens/HomeScreen"; // Replace with your screen components
import ProfileScreen from "./src/screens/ProfileScreen";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeStack"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      {/* Add more screens related to the Home section */}
    </Stack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeStack}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home-outline" size={size} color={color} />
            ),
            headerTitleAlign: "left",
            headerTitle: () => (
              <Image
                source={require('./src/assets/Instagram_logo.png')}
                style={{ width: 120, height: 40 }} // Adjust width and height as needed
              />
            ),
          }}
        />
        <Tab.Screen
          name="Search"
          component={ProfileScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="search-outline" size={size} color={color} />
            ),
            headerTitleAlign: "left",
          }}
        />
        <Tab.Screen
          name="Post"
          component={ProfileScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="add-circle-outline" size={size} color={color} />
            ),
            headerTitleAlign: "left",
          }}
        />
        <Tab.Screen
          name="Reels"
          component={ProfileScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="videocam-outline" size={size} color={color} />
            ),
            headerTitleAlign: "left",
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="person-outline" size={size} color={color} />
            ),
            headerTitleAlign: "left",
          }}
        />
        {/* Add more tab screens for other sections */}
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
