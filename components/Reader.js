import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Reader() {
  return (
    <View style = {styles.container}>
       <Text style = {styles.content}> qr   Reader </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    right: 192
  },
  content: {
    position: 'absolute',
    top: 380,
    padding: 40,
    paddingHorizontal: 80,
    paddingVertical:100,
    backgroundColor:"gray",
  },
});