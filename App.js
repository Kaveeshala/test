import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import DashboardScreen from "./screens/DashboardScreen";
import CustomerProfileScreen from "./screens/CustomerProfileScreen";
import TaskManagementScreen from "./screens/TaskManagementScreen";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === "Dashboard") {
              iconName = "ios-home";
            } else if (route.name === "CustomerProfile") {
              iconName = "ios-people";
            } else if (route.name === "TaskManagement") {
              iconName = "ios-list";
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen name="Dashboard" component={DashboardScreen} />
        <Tab.Screen name="CustomerProfile" component={CustomerProfileScreen} />
        <Tab.Screen name="TaskManagement" component={TaskManagementScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
