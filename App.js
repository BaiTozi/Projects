import { StatusBar } from 'expo-status-bar'; 
import React from 'react';
import EventList from './List'; 
import { StyleSheet, Text, View } from 'react-native';


export default function App() {
  return (
    <View styles={styles.container} >
      <Text style={styles.textCenter}>CAR DEALERSHIP</Text>
      <View style={styles.textCenter}>
      <EventList />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b30000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textCenter:{
    textAlign:'center'
  }
});