import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

const DATA = [
  {
    id: '1',
    title: 'Language',
    
  },
  {
    id: '2',
    title: 'My Pofile',
  
  },
  {
    id: '3',
    title: 'Contact Us',
    icon: 'router',
  },
  {
    id: '4',
    title: 'Change Password',
  },
  {
    id: '5',
    title: 'privacy Policy',
  },
];

const Settings = () => {
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.item}>
      <View style={styles.itemLeft}>
        <View style={styles.itemText}>
          <Text style={styles.itemTitle}>{item.title}</Text>
    
        </View>
      </View>
      <Ionicons name="chevron-forward" size={24} color="#666" />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="arrow-back" size={24} color="#444" />
        <Text style={styles.headerTitle}>Transactions</Text>
        <Ionicons name="search" size={24} color="#444" />
      </View>

      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerTitle: {
    flex: 1,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#444',
  },
  list: {
    flex: 1,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemText: {
    marginLeft: 20,
  },
  itemTitle: {
    fontSize: 16,
    color: '#444',
  },
  itemAmount: {
    fontSize: 14,
    color: '#666',
  },
});

export default Settings;
