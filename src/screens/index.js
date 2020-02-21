import React from 'react'
import Screen from './Screen'

/**
 * 
 * Cada Screen informa o seu componente body via props
 */
export const ProfileScreen = ( { navigation }) => <Screen navigation={navigation} name="Profile" />
export const CalcScreen = ({ navigation }) => <Screen navigation={navigation} name="Calculadora" />
export const SigninScreen = ({ navigation }) => <Screen navigation={navigation} name="Signin" />
 export const LoginScreen = ({ navigation }) => <Screen navigation={navigation} name="Login" />
//  export const LogoutScreen = ({ navigation }) => <Screen navigation={navigation} name="Logout" />