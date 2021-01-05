import React, { useContext } from 'react'
import { Container, Input, SearchIcon } from './styles'

function SearchInput() {
   

    return (
        <Container>
            <SearchIcon name='search' size={30}/>
            <Input />
        </Container>
    )
}

export default SearchInput