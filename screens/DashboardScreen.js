import React from "react";
import {
  View,
  Button,
  StyleSheet,
  Text,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { LineChart } from "react-native-chart-kit";

const DashboardScreen = ({ navigation }) => {
  const chartData = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [{ data: [20, 45, 28, 80, 99, 43] }],
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Sales Performance Overview</Text>
      <LineChart
        data={chartData}
        width={Dimensions.get("window").width - 16}
        height={220}
        yAxisLabel="$"
        chartConfig={{
          backgroundColor: "#e26a00",
          backgroundGradientFrom: "#fb8c00",
          backgroundGradientTo: "#ffa726",
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16,
          },
        }}
        style={styles.chart}
      />

      <Text style={styles.sectionTitle}>Quick Actions</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("CustomerProfile")}
        >
          <Text style={styles.buttonText}>View Customer Profiles</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("TaskManagement")}
        >
          <Text style={styles.buttonText}>Manage Tasks</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.sectionTitle}>Recent Activities</Text>
      <View style={styles.activities}>
        <Text>• Met with John Doe on pricing strategy</Text>
        <Text>• Sent follow-up email to Jane Smith</Text>
        <Text>• Scheduled demo with Mike Brown</Text>
      </View>

      <Text style={styles.sectionTitle}>Upcoming Tasks</Text>
      <View style={styles.activities}>
        <Text>• Prepare product demo for client X</Text>
        <Text>• Follow up on payment for client Y</Text>
        <Text>• Create a new marketing strategy proposal</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
    color: "#333",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
    color: "#444",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  button: {
    flex: 1,
    marginHorizontal: 5,
    backgroundColor: "#4CAF50",
    padding: 12,
    borderRadius: 8,
    elevation: 2,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
  chart: {
    marginVertical: 8,
    borderRadius: 16,
  },
  activities: {
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 5,
    elevation: 2,
    marginBottom: 15,
  },
});

export default DashboardScreen;
