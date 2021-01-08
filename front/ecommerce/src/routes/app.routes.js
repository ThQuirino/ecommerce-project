import React from 'react';
import {createStackNavigator} from '@react-navigation/stack'
import Menu from '../pages/home/menu'
import Login from '../pages/login/login'
import Cadastro from '../pages/cadastro/index'
const AuthStack=createStackNavigator()
const AppAuntent =()=>{
    return(
        <AuthStack.Navigator 
            screenOptions={{headerStyle:{backgroundColor:'#222527'},headerTintColor:'#fff'}} 
            >
            <AuthStack.Screen name="Login" component={Login}/>
            <AuthStack.Screen name="Cadastro" component={Cadastro}/>
        </AuthStack.Navigator>
    )
}
export default AppAuntent