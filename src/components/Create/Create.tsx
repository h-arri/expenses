import styled from '@emotion/styled'
import * as React from 'react'
import Form from '../Form/Form'

const Container = styled.div({
    width: '58vh',
    backgroundColor: 'rgba(181, 164, 221, 0.7)',
    borderRadius: '5px',
    marginTop: '4%',
    display: 'flex',
})

const Create = (): JSX.Element => {
    return (
        <Container>
            <Form />
        </Container>
    )
}

export default Create
