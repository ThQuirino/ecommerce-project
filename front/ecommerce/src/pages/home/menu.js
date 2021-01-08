import React from 'react'
import {Container,Texto,Input,Notifit,Butto} from './styles.js'
import Nav from '../../components/navbar/index.js'
import Carrossel from '../../components/carrossel/index'
export default function Menu ({navigation}){
 
    function navigateTo(){
        navigation.navigate('Login');

    }
    function navigateCreate(){
        navigation.navigate('Cadastro');

    }
    return(
    
        <Container>     
            <Nav navigation={navigation}/>
            <Carrossel/>
            <Notifit>
                <Texto>Acesse sua conta agora</Texto>
                <Butto title="Open" onPress={navigateTo}/>
                <Texto onPress={navigateCreate}>Criar conta</Texto>
            </Notifit>
          
        </Container>
       
        
    )
}
