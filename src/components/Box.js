import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Box({children, style}) {
  return (
    <View style={[styles.box, style]}>
      <Text style={styles.text}>{children}</Text>
    </View>
  )
}



const styles = StyleSheet.create({
    box: {
      //backgroundColor: '#fff',
      padding: 10,
      //borderColor: 'red'
    },
    text: {
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center',
      //color: 'white',
    },
  
})