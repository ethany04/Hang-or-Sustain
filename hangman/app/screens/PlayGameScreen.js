import { StyleSheet, Image, Text, View } from 'react-native'
import React from 'react'

export default function PlayGameScreen() {
  return (
    <Image 
        style={styles.playBackground}
        source={require('../assets/play0.png')}
    />
  )
}

const styles = StyleSheet.create({
    playBackground: {
        flex: 1,
    },
});