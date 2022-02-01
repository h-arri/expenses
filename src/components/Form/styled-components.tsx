import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { InputProps, WrapperProps } from './types'

const errorStyles = css({
    backgroundColor: '#ffe6e6',
})

const errorTextStyles = css({
    '> span': {
        padding: '1% 2%',
        fontSize: '0.8em',
        color: '#b30000',
    },
})

const commonInputStyles = () => css`
    font-size: 1em;
    color: #272727;
    font-family: Alegreya Sans SC, sans-serif;
    padding: 3% 5%;
    height: 35px;
    border-radius: 5px;
    border: none;

    &:focus,
    &:focus-visible: {
        border: none;
        outline: none;
    }

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button: {
        -webkit-appearance: none;
        margin: 20px;
    }
`

const StyledForm = styled.form({
    margin: '7% 13%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',

    '& > * + *': {
        marginTop: '20px',
        borderRadius: '5px',
        border: 'none',
    },
})

const Wrapper = styled.div<WrapperProps>`
    display: flex;
    flex-direction: column;
    ${(props) => props.error && errorTextStyles}
`

const Input = styled.input<InputProps>`
    ${commonInputStyles};
    ${(props) => props.error && errorStyles};
`

const TextArea = styled.textarea`
    ${commonInputStyles};
    height: 200px;
    padding: 15px;

    &:focus-visible: {
        outline: none;
    }
`

const DatePicker = styled.input<InputProps>`
    ${commonInputStyles};
    ${(props) => props.error && errorStyles};
`

const Payments = styled.div({
    display: 'flex',
    justifyContent: 'left',
    padding: 0,
    marginLeft: '-8px',
    width: '50%',
})

const Payment = styled.div({
    '> label': {
        '> input[type="radio"]': {
            display: 'none',

            '&:checked + div': {
                backgroundColor: '#48555c',
                color: '#dee5e9',
            },
        },

        '> div': {
            width: '100px',
            height: '50px',
            backgroundColor: 'white',
            color: '#272727',
            borderRadius: '5px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '8px',
            padding: 0,
            textAlign: 'center',
            transition: 'background-color 0.5s ease',

            '> span': {
                margin: '0 5px',
            },
        },
    },

    '&:hover': {
        '> label': {
            cursor: 'pointer',

            '> div': {
                cursor: 'pointer',
                backgroundColor: '#738792',
                color: '#dee5e9',
            },
        },
    },
})

const Button = styled.button({
    width: '40%',
    height: '50px',
    backgroundColor: '#2b3337',
    fontSize: '1.3em',
    color: '#dee5e9',
    fontFamily: `'Alegreya Sans SC', sans-serif`,
    transition: 'background-color 0.5s ease',

    '&:hover': {
        cursor: 'pointer',
        backgroundColor: '#738792',

        '&:disabled': {
            cursor: 'not-allowed',
        },
    },
})

export {
    errorStyles,
    errorTextStyles,
    commonInputStyles,
    StyledForm,
    Input,
    DatePicker,
    TextArea,
    Wrapper,
    Payments,
    Payment,
    Button,
}
