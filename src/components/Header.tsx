import styled from '@emotion/styled'
import * as React from 'react'

const StyledHeader = styled.div({
    padding: '0 5%',
    borderBottom: '2px solid #a895d8',
    margin: '0 5%',

    '> h1': {
        color: '#a895d8',
        fontSize: '2.5em',
    },
})

const Header = () => {
    return (
        <StyledHeader>
            <h1>Expenses</h1>
        </StyledHeader>
    )
}

export default Header
