import React from 'react';
import { View,StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/pages/Home';
import ProfilePage from './src/pages/ProfilePage';


export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Home/>
      </View>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1
  }
})

