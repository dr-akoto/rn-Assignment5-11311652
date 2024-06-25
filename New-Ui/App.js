import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}> 
        <Image
        source={require('./assets/imagesFolder/profile.png')}
        style={styles.image}
      />      
      <Text style={styles.text}>Open up App.js !</Text>
</View>
     

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding:20
    
  },
  header:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between'


  },
  text: {
    color: 'black',
    fontSize: 20,
    marginTop:0,

  },
  image:{
    width:60,
    height:60,
    borderRadius:50,
  }
});
