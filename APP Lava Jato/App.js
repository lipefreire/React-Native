<<<<<<< HEAD
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
=======
import React, { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet,  View } from 'react-native';
import { Button, Input, Text } from "react-native-elements";
import  Icon  from "react-native-vector-icons/FontAwesome";
import styles from "./style/MainStyle";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from "./telas/Login";
import Principal from "./telas/Principal"
import Cadastro from "./telas/Cadastro";


const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Principal" component={Principal} />
      <Stack.Screen name="Cadastro" component={Cadastro} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
>>>>>>> 1cd7ae213cc5a6975abcb2cc9595de24e14dafe9
