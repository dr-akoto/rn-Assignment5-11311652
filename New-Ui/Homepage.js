import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Ionicons, FontAwesome } from "@expo/vector-icons";

const Homepage = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.profileImage}
          source={require("./assets/imagesFolder/profile.png")}
        />
        <View>
          <Text style={styles.welcomeText}>Welcome back,</Text>
          <Text style={styles.nameText}>Eric Atsu</Text>
        </View>
        <Ionicons
          name="search"
          size={24}
          color="black"
          style={styles.searchIcon}
        />
      </View>

      <View style={styles.card}>
        <Image
          source={require("./assets/imagesFolder/Card.png")}
          style={styles.cardImage}
          resizeMode="contain"
        />
      </View>

      <View style={styles.actionButtons}>
        <TouchableOpacity style={styles.actionButton}>
          <Ionicons name="arrow-up" size={24} color="black" />
          <Text>Sent</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Ionicons name="arrow-down" size={24} color="black" />
          <Text>Receive</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Ionicons name="wallet" size={24} color="black" />
          <Text>Loan</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Ionicons name="add-circle-outline" size={24} color="black" />
          <Text>Topup</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.transactionSection}>
        <Text style={styles.transactionTitle}>Transaction</Text>
        <TouchableOpacity>
          <Text style={styles.sellAll}>Sell All</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.transactionList}>
        <View style={styles.transactionItem}>
          <FontAwesome name="apple" size={24} color="black" />
          <View style={styles.transactionDetails}>
            <Text>Apple Store</Text>
            <Text style={styles.transactionCategory}>Entertainment</Text>
          </View>
          <Text style={styles.transactionAmount}>- $5,99</Text>
        </View>

        <View style={styles.transactionItem}>
          <FontAwesome name="spotify" size={24} color="black" />
          <View style={styles.transactionDetails}>
            <Text>Spotify</Text>
            <Text style={styles.transactionCategory}>Music</Text>
          </View>
          <Text style={styles.transactionAmount}>- $12,99</Text>
        </View>

        <View style={styles.transactionItem}>
          <FontAwesome name="exchange" size={24} color="black" />
          <View style={styles.transactionDetails}>
            <Text>Money Transfer</Text>
            <Text style={styles.transactionCategory}>Transaction</Text>
          </View>
          <Text style={styles.transactionAmount}>$300</Text>
        </View>

        <View style={styles.transactionItem}>
          <Ionicons name="cart" size={24} color="black" />
          <View style={styles.transactionDetails}>
            <Text>Grocery</Text>
            <Text style={styles.transactionCategory}>-</Text>
          </View>
          <Text style={styles.transactionAmount}>- $88</Text>
        </View>
      </View>

      <View style={styles.navbar}>
        <Ionicons name="home" size={24} color="blue" />
        <Ionicons name="card" size={24} color="gray" />
        <Ionicons name="stats-chart" size={24} color="gray" />
        <Ionicons name="settings" size={24} color="gray" />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  welcomeText: {
    fontSize: 16,
    color: "#666",
  },
  nameText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  searchIcon: {
    marginLeft: "auto",
  },
  card: {
    height: "30vh",
    marginBottom: 20,
    alignItems: "center", // Center the image horizontally
    justifyContent: "center", // Center the image vertically
  },
  cardImage: {
    width: "100%",
    height: "100%",
    // Adjust the aspect ratio as per your image
  },
  actionButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  actionButton: {
    alignItems: "center",
    padding: 10,
  },
  transactionSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  transactionTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  sellAll: {
    color: "blue",
  },
  transactionList: {
    marginBottom: 20,
  },
  transactionItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  transactionDetails: {
    marginLeft: 10,
    flex: 1,
  },
  transactionCategory: {
    color: "#666",
  },
  transactionAmount: {
    fontWeight: "bold",
  },
  navbar: {
    flexDirection: "row",
    justifyContent: "space-around",
    borderTopWidth: 1,
    borderTopColor: "#ddd",
    paddingTop: 10,
  },
});

export default Homepage;
