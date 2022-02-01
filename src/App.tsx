import * as React from 'react'
import Container from './components/Container'
import Create from './components/Create/Create'
import Header from './components/Header'

const App = () => {
    return (
        <div>
            <Header />
            <Container>
                <Create />
            </Container>
        </div>
    )
}

export default App
