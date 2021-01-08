import React from 'react'
import {Container,Texto,HeaderContainer,Imagem} from './styles.js'
import SearchInput from '../searchInput/index.js'
import { IconButton, Colors } from 'react-native-paper';
import {DrawerActions} from '@react-navigation/native'

export default function Nav ({navigation}){
    function navigateToUsers(){
        navigation.dispatch(DrawerActions.openDrawer())
    }
    return(
       <Container>
           <HeaderContainer>
           <IconButton
             icon="menu"
             color='#222527'
             size={30}
             onPress={navigateToUsers}    
            />
            <Imagem source={require('../../photos/amazon-logo.png')}/>
            <IconButton
             icon="shopping"
             color='#222527'
             size={30}
             onPress={navigateToUsers}    
            />
           </HeaderContainer>
           <SearchInput/>  
       </Container>
            

    )
}