import React from "react";
import { View, Text, ImageBackground, ScrollView,Image, Alert, Button } from "react-native";
import { Linking } from 'expo';

import {
    DrawerItemList, DrawerContentScrollView,
} from '@react-navigation/drawer'

import estilos from "./style";

export default (props) => { 

    return (
        <DrawerContentScrollView {...props}>
            <ScrollView>
            <ImageBackground style={estilos.backgroundProfile} source={require('../../../assets/backgroundProfile.png')}>
                <View style={estilos.layer}>

                    {/* Perfil */}
                    <View style={estilos.profile}>
                        <Button style={estilos.container} onPress={() => Alert.alert('fsdgj', 'asdf')}>
                        <Image style={estilos.imagem}source={require('../../../assets/profile.png')}
                        onPress={() => Alert.alert('fsdgj', 'asdf')}></Image>
                        </Button>
                        <Text style={{ fontSize: 20, color: '#8850ef' }}>Profile do usuário</Text>
                    </View>
                </View>
            </ImageBackground>
            <View style={estilos.drawerItens}>
                <DrawerItemList {...props} />
            </View>
        </ScrollView>
            </DrawerContentScrollView>
        
    );
}
