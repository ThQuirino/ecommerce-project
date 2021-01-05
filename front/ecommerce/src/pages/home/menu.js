import React from 'react'
import {Container,Texto,Input} from './styles.js'
import {Button}from 'react-native'
import Nav from '../../components/navbar/index.js'
export default function Menu ({navigation}){
    function navigateToUsers(){
        navigation.navigate('Login');
    }
    return(
    
        <Container>
          
            <Nav/>
         
           {/**<Button title="Navigate" onPress={navigateToUsers}/>*/} 
        </Container>
       
        
    )
}
