import React, { useContext } from 'react'
import { Container, Input, SearchIcon } from './styles'

function SearchInput() {
   

    return (
        <Container>
            <SearchIcon name='search' size={30} />
            <Input underlineColorAndroid = "transparent"
               placeholder = "Nome do produto"/>
        </Container>
    )
}

export default SearchInput