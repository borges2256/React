import React, { Component } from 'react'
import { View, Text, ImageBackground } from 'react-native'

// Navigators
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'

// Componentes
import {
  ProfileScreen,
  CalcScreen,
  SigninScreen,
} from "./src/screens/index";

import LoginScreen from './src/screens/Login'
// import LogoutScreen from "./src/screens/Logout";
import Sidebar from "./src/components/Sidebar/";

const Drawer = createDrawerNavigator();
const CustomDrawerContent = (props) => <Sidebar {...props} />


// function CustomDrawerContent(props) {
//   return (
//     <DrawerContentScrollView {...props}>
//       <View style={{ alignItems: 'center', justifyContent: 'center', heigth: 200, width: '100%', backgroundColor: '#9370db'}}>
//         <Text style={{ fontSize: 50, color: 'white' }}>Profile do usário</Text>
//       </View>
//       <DrawerItemList {...props} />
//       <DrawerItem label='Help' onPress={() => alert('link do help')} />
//     </DrawerContentScrollView>
//   );
// }

export default class App extends Component {

  render() {
    return (
      <NavigationContainer >
        <Drawer.Navigator initialRouteName="Calculadora"
          drawerContent={(props) => CustomDrawerContent(props)}
          drawerContentOptions={{
            activeTintColor: '#23c1bd',
            itemStyle: { marginVertical: 30, },
          }}
          hideStatusBar={true}
          drawerType='slide'
        >
          <Drawer.Screen name="Profile" component={ProfileScreen} />
          <Drawer.Screen name="Signin" component={SigninScreen} />
          <Drawer.Screen
            name="Login"
            component={LoginScreen}
            options={{ gestureEnabled: false }}
            keyboardDismissMode="none"

          />
          <Drawer.Screen name="Calculadora" component={CalcScreen} />
          {/* <Drawer.Screen name="Logout" component={LogoutScreen} /> */}
        </Drawer.Navigator>
      </NavigationContainer>
    )
  }
}