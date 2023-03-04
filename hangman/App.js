import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet, Text, View, Image, SafeAreaView, Alert, Button } from 'react-native';
import WelcomeScreen from './app/screens/WelcomeScreen';
import PlayGameScreen from './app/screens/PlayGameScreen';

export default function App() {
  return <PlayGameScreen />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
