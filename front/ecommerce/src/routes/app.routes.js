import React from 'react';
import {createStackNavigator} from '@react-navigation/stack'
import Menu from '../pages/home/menu'
import Login from '../pages/login/login'
const AuthStack=createStackNavigator();

const AppAuntent =()=>{
    return(
        <AuthStack.Navigator 
        screenOptions={{headerStyle:{backgroundColor:'#222527'},headerTintColor:'#fff'}} 
        initialRouteName="Menu">
            <AuthStack.Screen name="Menu" component={Menu}/>
            <AuthStack.Screen name="Login" component={Login}/>
        </AuthStack.Navigator>
    )
}
export default AppAuntent