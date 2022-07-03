import React, { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet,  View } from 'react-native';
import { Button, Input, Text } from "react-native-elements";
import  Icon  from "react-native-vector-icons/FontAwesome";
import styles from "../style/MainStyle";


export default function Login({navigation}) {
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)
  
  const entrar = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: "Principal" }],
    });
  }

  const cadastrar = () => {
    navigation.navigate("Cadastro")
  }


  return (
    <View style={[styles.container, specificStyles.specificContainer]}>
      <Text h3>Bem vindo ao LavaCar!</Text>
     

      <Input
        placeholder="E-mail "
        leftIcon={{ type: 'font-awesome', name: 'envelope' }}
        onChangeText={value => setEmail(value)}
        keyboardType = "email-address"
        />
      
      <Input
        placeholder="Digite sua senha  "
        leftIcon={{ type: 'font-awesome', name: 'key' }}
        onChangeText={value => setPassword(value)}
        secureTextEntry = {true}
      />
      <StatusBar style="auto" />

      <Button
        icon={
          <Icon
            name=""
            size={16}
            color="white"
          />
        }
        title="Login"
        buttonStyle = {specificStyles.button}
        onPress={() => entrar()}
      />

      <Button
        icon={
          <Icon
            name=""
            size={15}
            color="white"
          />
        }
        title="Cadastrar-se agora"
        buttonStyle = {specificStyles.button}
        onPress={() => cadastrar()}
      />
    </View>
  );
}
  const specificStyles = StyleSheet.create({
    specificContainer: {
      backgroundColor:"#fff"
    },
    button: {
      width: "100%",
      marginTop: 10
    }
  })
