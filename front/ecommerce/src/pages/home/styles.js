import styled from 'styled-components'
import {Dimensions } from 'react-native'
const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

const Container=styled.View`
        display:flex;
        flex-direction:column;
        
`
const Texto=styled.Text`

`
const Input=styled.TextInput`
        height:35px;
        border-bottom-width:1px;
`;
const Notifit=styled.View`
        width:100%;
        display:flex;
        flex-direction:column;
        margin-top:5px;
        margin-bottom:5px;
`
const Butto=styled.Button`
        width:25%;
        height:10%;
        margin-top:10px;
        margin-bottom:10px;
`
export {Container,Texto,Input,Notifit,Butto}