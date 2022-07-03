import React, { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { View, KeyboardAvoidingView, Image, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';
import { Button, CheckBox, Input} from "react-native-elements";
import  Icon  from "react-native-vector-icons/FontAwesome";
import styles from "../../style/MainStyle"
import MyButton from "../components/Button"



export default function Cadastro({navigation}) {
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)
  const [nome, setNome] = useState(null)
  const [cpf, setCpf] = useState(null)
  const [telefone, setTelefone] = useState(null)

  const[errorEmail, setErrorEmail] = useState(null)
  const[errorNome, setErrorNome] = useState(null)
  const[errorCpf, setErrorCpf] = useState(null)
  const[errorTelefone, setErrorTelefone] = useState(null)

  const [isSelected, setSelected] = useState(false)
  
  const validar = () => {
    let error = false
    setErrorEmail(null)
    setErrorCpf(null)
    
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (!re.test(String(email).toLowerCase())){
      setErrorEmail("Preencha seu e-mail corretamente")
      error = true
    }
    if(cpf == null){
        setErrorCpf("Preencha seu CPF")
        error = true
    }
    return !error
  }

  
  const salvar = () => {
      if(validar()){
    console.log("Cadastrado com Sucesso!")
  }
}
  
  const entrar = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: "Principal" }],
      routes: [{ name: "Login" }],
    });
  }

  const cadastrar = () => {
    navigation.navigate("Cadastro")
  }
  
  return (
    <KeyboardAvoidingView style={SpecificStyles.container}>
                <View>
                <Image style={styles.image}
                source={require('../../assets/path120-removebg.png')}/>
            </View>
            <View style={SpecificStyles.cadastro}>
                <Text style={SpecificStyles.c}> Cadastre-se</Text>
            </View>
            <View style={SpecificStyles.textInput}>
                <TextInput
                style={SpecificStyles.input}
                placeholder="Nome"
                autoCorrect={false}
                value={nome}
                onChangeText={nome => setNome(nome)}>
                </TextInput>

                <TextInput
                style={SpecificStyles.input}
                placeholder="Telefone"
                autoCorrect={false}
                value={telefone}
                onChangeText={telefone => setTelefone(telefone)}>
                </TextInput>

                <TextInput
                style={SpecificStyles.input}
                placeholder="Email"
                autoCorrect={false}
                value={email}
                onChangeText={email => setEmail(email)}>
                </TextInput>

                <TextInput
                style={SpecificStyles.input}
                placeholder="Senha"
                autoCorrect={false}
                value={password}
                onChangeText={password => setPassword(password)}>
                </TextInput>
            </View>
            <View style={SpecificStyles.textofinal}>
                <TouchableOpacity style={SpecificStyles.text}>
                    <Text>Ao criar sua conta você concorda com nossos termo de serviços e politicas de privacidade.</Text>
                </TouchableOpacity>
            </View>
            <View style={SpecificStyles.b}>
                <MyButton text="Cadastrar"
                    onPress={salvar}/>
            </View>
            
        </KeyboardAvoidingView>
    )
}
const SpecificStyles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input:{
        marginBottom: 20,
        color: '#000000',
        fontSize: 15,
        borderRadius: 15,
        borderWidth: 2,
        borderColor: "#000000",
        padding: 8,
    },
    text: {
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center',
        width: '100%',
    },
    textInput:{
        width: '80%',
    },
    c: {
        fontSize: 25,
        color:'#4A4A4A',
    },
    b: {
        width: '60%'
    }, 
    cadastro:{
        marginRight: '45%',
        padding: 15
    },
    textofinal:{
        width: '80%',
        padding: 10
    },
    image: {
        height: 57,
        width: 280,
        margin: 50,
        marginTop: 10,
        alignItems: 'center'

    },
})