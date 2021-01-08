import  styled from 'styled-components'
import Icon from 'react-native-vector-icons/MaterialIcons'
const Container =styled.View`
    background:#7159c1;
      
`;
const Button =styled.Button`
    width:25px;
    color:#222527;
`
const Texto=styled.Text`


`
const HeaderContainer=styled.View`
    display:flex;
    flex-direction:row;
    padding-top:15px;
    height:80px;
    justify-content:space-between;
    align-items:center;
`
const SearchIcon = styled(Icon)`
    z-index:10;
    color:#222527;
`
const Imagem =styled.Image`
    width:68px;
    height:20px;
    margin-top:10px;
`;
export {Container,Texto,Button,SearchIcon,HeaderContainer,Imagem}