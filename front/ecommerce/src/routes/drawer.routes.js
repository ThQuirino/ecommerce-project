import React from 'react'
import {
    createDrawerNavigator
  } from '@react-navigation/drawer';
import Menu from '../pages/home/menu'
import appRoutes from './app.routes';
import Cadastro from '../pages/cadastro/index'
const Drawer = createDrawerNavigator();
export default function MyDrawer() {
    return (
        <Drawer.Navigator initialRouteName="Menu">
          <Drawer.Screen name="Menu" component={Menu} />
          <Drawer.Screen name="Login" component={appRoutes} />
          <Drawer.Screen name="Cadastro" component={Cadastro} />
        </Drawer.Navigator>
    )
}
