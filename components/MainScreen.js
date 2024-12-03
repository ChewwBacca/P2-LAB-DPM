import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MainScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.centerText}>MUH. AZIZURROHMAN</Text>
      <View style={styles.flexContainer}>
        <View style={[styles.box, styles.boxLeft]} />
        <View style={[styles.box, styles.boxRight]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D3D3D3', 
    alignItems: 'center',
    justifyContent: 'center',
  },
  centerText: {
    fontSize: 24, 
    color: 'blue', 
    fontWeight: 'bold', 
    marginBottom: 50, 
  },
  flexContainer: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    width: '60%', 
  },
  box: {
    width: 100,
    height: 100, 
  },
  boxLeft: {
    backgroundColor: 'black', 
  },
  boxRight: {
    backgroundColor: 'white', 
  },
});

export default MainScreen;
