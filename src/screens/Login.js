import React, { Component } from 'react';
import { Text, View, TextInput, Image, TouchableOpacity, ImageBackground, AsyncStorage, Alert, KeyboardAvoidingView } from 'react-native';

import estilos from './login-style';


export default class LoginScreen extends Component {

    constructor() {
        super()
        this.state = {
            login: 'Edd',
            senha: '123',
            LOGIN: 'Edd',
            SENHA: '123',
        }
    }
    componentDidMount() {

        this.verificaLogin()
    }

    verificaLogin = async () => {
        try {
            const login = await AsyncStorage.getItem('login')
            Alert.alert('verificar', login)
            if (login)
                this.props.navigation.navigate('Calculadora')
        }
        catch (error) {
            // Error retrieving data
        }

    }

    login = async () => {
        const USUARIO = this.state.LOGIN
        const SENHA = this.state.SENHA

        const userUsuario = this.state.login
        const userSenha = this.state.senha

        if (SENHA === userSenha && USUARIO === userUsuario) {

            try {
                await AsyncStorage.setItem('logado', JSON.stringify(true))
                this.props.navigation.navigate('Calculadora')
            } catch (error) {
                Alert.alert('Erro', 'Erro ao efetuar o login')
            }
        } else {
            Alert.alert('Erro', 'Login Inválido')
        }
    }

    render() {

        // const {navigate} = this.props.navigation;
        return (
            <KeyboardAvoidingView style={{ flex: 1}} behavior="padding">
            <ImageBackground source={require('../../assets/background.jpg')} style={{ width: '100%', height: '100%' }}>
                <View style={[estilos.container,]}>

                    <View style={[estilos.formBox, { opacity: 0.8 }]}>
                        <View style={estilos.logotipo}>
                            <Image resizeMode="contain" style={{ width: '100%', height: '100%' }} source={require('../../assets/react-native.png')} />
                        </View>
                        <View style={estilos.formulario}>
                            <TextInput placeholderTextColor="black" style={estilos.inputField} placeholder="Username"></TextInput>
                            <TextInput placeholderTextColor="black" style={estilos.inputField} placeholder="Password" secureTextEntry keyboardType="numeric"></TextInput>
                            <TouchableOpacity style={estilos.loginButton}>
                                <Text style={estilos.textLoginButton}
                                    onPress={() => { this.login() }}>Sign In</Text>
                            </TouchableOpacity>

                            <View style={estilos.conainerForgot}>
                                <TouchableOpacity style={estilos.textForgot}>
                                    <Text style={estilos.textForgot}>Forgot Password? |</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={estilos.textForgot}>
                                    <Text style={estilos.textForgot}> Register</Text>
                                </TouchableOpacity>

                            </View>
                        </View>

                        <View style={estilos.fazendooo}>
                            <Text style={estilos.textForgot}>
                                Conect whith
                            <Text style={estilos.socialAccount}> Social Account</Text>
                            </Text>
                        </View>
                    </View>

                </View>
            </ImageBackground>
            </KeyboardAvoidingView>
        );
    }
};