import React from 'react'
import {Container,Imagem} from './styles'
const Carrossel =()=>{
    return(
        <Container>
            <Imagem source={require("../../photos/amazon.png")}/>
            <Imagem source={require("../../photos/prob2.jpg")}/>
            <Imagem source={require("../../photos/propagabda.jpg")}/>
        </Container>
    )
}
export default Carrossel