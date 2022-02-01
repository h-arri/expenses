import styled from '@emotion/styled'
import * as React from 'react'

const StyledDiv = styled.div({
    height: '70%',
    margin: '20px',
    display: 'flex',
    justifyContent: 'center',
})

const Container = ({ children }: React.HTMLAttributes<HTMLDivElement>) => {
    return <StyledDiv>{children}</StyledDiv>
}

export default Container
