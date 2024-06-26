// screens/HomeScreen.js
import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { Text, Button, List, Avatar, Card } from "react-native-paper";

export default function HomeScreen({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Avatar.Image
          size={50}
          source={{ uri: "https://via.placeholder.com/50" }}
        />
        <Text style={styles.welcome}>Welcome back,</Text>
        <Text style={styles.name}>Eric Atsu</Text>
      </View>
      <Card style={styles.card}>
        <Card.Content>
          <Text style={styles.cardText}>4562 1122 4595 7852</Text>
          <Text style={styles.cardText}>AR Jonson</Text>
          <Text style={styles.cardText}>Expiry Date: 24/2000</Text>
          <Text style={styles.cardText}>CVV: 6986</Text>
        </Card.Content>
      </Card>
      <View style={styles.transactionContainer}>
        <List.Item
          title="Apple Store"
          description="Entertainment"
          left={() => <List.Icon icon="apple" />}
          right={() => <Text style={styles.negativeAmount}>- $5.99</Text>}
        />
        <List.Item
          title="Spotify"
          description="Music"
          left={() => <List.Icon icon="spotify" />}
          right={() => <Text style={styles.negativeAmount}>- $12.99</Text>}
        />
        <List.Item
          title="Money Transfer"
          description="Transaction"
          left={() => <List.Icon icon="transfer" />}
          right={() => <Text style={styles.positiveAmount}>$300</Text>}
        />
        <List.Item
          title="Grocery"
          description="Shopping"
          left={() => <List.Icon icon="cart" />}
          right={() => <Text style={styles.negativeAmount}>- $88</Text>}
        />
      </View>
      <Button mode="contained" onPress={() => navigation.navigate("Settings")}>
        Go to Settings
      </Button>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
  },
  header: {
    alignItems: "center",
    marginBottom: 16,
  },
  welcome: {
    fontSize: 18,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
  },
  card: {
    marginBottom: 16,
    padding: 16,
  },
  cardText: {
    fontSize: 18,
  },
  transactionContainer: {
    marginBottom: 16,
  },
  positiveAmount: {
    color: "green",
  },
  negativeAmount: {
    color: "red",
  },
});
