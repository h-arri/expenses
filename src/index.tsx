import { css } from '@emotion/css'
import * as React from 'react'
import { render } from 'react-dom'
import App from './App'

const styles = css`
    margin: 0;
    min-height: 100vh;
    // font-family: -apple-system, BlinkMacSystemFont, 'Sarala', 'PT Mono', 'Laila', 'Segoe UI', 'Roboto', 'Oxygen',
    //     'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', monospace, sans-serif;
    font-family: 'Alegreya Sans SC', sans-serif;
    background: #1a1528;
    overflow: hidden;
`
const body = document.getElementById('root')?.parentElement
body?.classList?.add(styles)

render(<App />, document.getElementById('root'))
