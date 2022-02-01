import { PaymentType } from '../../types'

export interface FormValues {
    amount: string
    description: string
    date: number | null
    paidWith: PaymentType
}

export interface FormErrors {
    amount: string
    date: string
}

export interface FormProps extends React.HTMLAttributes<HTMLFormElement> {
    attachment?: File | null
}

export interface WrapperProps extends React.HTMLAttributes<HTMLDivElement> {
    error: string
}

export interface InputProps
    extends React.HTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
    error: string
}
