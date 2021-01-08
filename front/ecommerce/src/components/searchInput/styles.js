import styled from 'styled-components/native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import {Dimensions} from 'react-native'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

const Container = styled.View`
    width:96%;
    border-radius: 25px;
    
    display:flex;
    justify-content: flex-end;
    margin:7px;
`

const Input = styled.TextInput`
    padding-left:35px;
    color:#222527;
    height: 33px;
    border:1px;
    position:relative;
    border-radius: 5px;
    background-color:#fff;

`

const SearchIcon = styled(Icon)`
    z-index:10;
    position:absolute;
    left:5px;
    bottom:0;
    top:2px;
    color:#222527;
`

export { Container, Input, SearchIcon }