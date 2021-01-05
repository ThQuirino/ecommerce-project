import styled from 'styled-components'
import {Dimensions } from 'react-native'
const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

const Container=styled.View`
    
`
const Texto=styled.Text`

`
const Input=styled.TextInput`
       
        height:35px;
        border-bottom-width:1px;
`;

export {Container,Texto,Input}