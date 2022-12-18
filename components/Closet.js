import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function Closet() {
  return (
    <View style={styles.closet}>
      <Text style={styles.header}>CLOSET</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  closet: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'stretch'
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    paddingBottom: 8,
    paddingLeft: 8,
    paddingRight: 8,
    marginBottom: 40,
    borderBottomColor: '#000',
    borderBottomWidth: 5,
  }
});