import React from "react";
import { StyleSheet } from "react-native";
// import Homepage from "./Homepage";
import SettingPage from "./SettingPage";
export default function App() {
  return <SettingPage />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
});
