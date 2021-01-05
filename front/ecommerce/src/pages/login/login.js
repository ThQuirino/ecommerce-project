import React from 'react'
import {Container,Texto} from './styles.js'
import {Button} from 'react-native';

export default function Login ({navigation}){
    function navigateToMenu(){
        navigation.navigate('Menu');
    }
    return(
        <Container>
            <Texto>Agora vai</Texto>
            <Button title="Home" onPress={navigateToMenu}/>
        </Container>
    )
}
