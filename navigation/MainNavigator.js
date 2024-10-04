import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screens/LoginScreen";
import DashboardScreen from "../screens/DashboardScreen";
import CustomerProfileScreen from "../screens/CustomerProfileScreen";
import TaskManagementScreen from "../screens/TaskManagementScreen";

const Stack = createStackNavigator();

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Dashboard" component={DashboardScreen} />
        <Stack.Screen
          name="CustomerProfile"
          component={CustomerProfileScreen}
        />
        <Stack.Screen name="TaskManagement" component={TaskManagementScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
