import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

// Example Sri Lankan customer data
const customerData = {
  name: "Ravindu Perera",
  email: "ravindu.perera@example.lk",
  phone: "+94-77-123-4567",
  notes: [
    "Met on 10/05 in Colombo",
    "Discussed project timeline",
    "Needs a follow-up meeting in Kandy",
  ],
};

const CustomerProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Customer Profile</Text>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Name:</Text>
        <Text style={styles.value}>{customerData.name}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Email:</Text>
        <Text style={styles.value}>{customerData.email}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Phone:</Text>
        <Text style={styles.value}>{customerData.phone}</Text>
      </View>
      <Text style={styles.notesHeader}>Interaction Notes:</Text>
      <FlatList
        data={customerData.notes}
        renderItem={({ item }) => <Text style={styles.noteItem}>• {item}</Text>}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f9f9f9",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
  },
  infoContainer: {
    flexDirection: "row",
    marginBottom: 10,
    padding: 10,
    borderRadius: 8,
    backgroundColor: "#ffffff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 2,
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    color: "#555",
    flex: 1,
  },
  value: {
    fontSize: 16,
    color: "#333",
    flex: 2,
  },
  notesHeader: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
    color: "#333",
  },
  noteItem: {
    fontSize: 16,
    color: "#666",
    paddingVertical: 2,
  },
});

export default CustomerProfileScreen;
