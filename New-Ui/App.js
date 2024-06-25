import React from 'react';
import { StyleSheet } from 'react-native';
// import Homepage from './Homepage';
import Settings from './Setting';
export default function App() {
  return (
    <Settings />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
});
