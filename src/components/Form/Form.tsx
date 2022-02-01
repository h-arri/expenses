import * as React from 'react'
import { PaymentType } from '../../types'
import {
    Button,
    DatePicker,
    Input,
    Payment,
    Payments,
    StyledForm,
    TextArea,
    Wrapper,
} from './styled-components'
import { FormErrors, FormValues } from './types'

const Form = (): JSX.Element => {
    const initialFormState: FormValues = {
        amount: '',
        description: '',
        date: null,
        paidWith: PaymentType.CASH,
    }
    const initialErrors: FormErrors = {
        amount: '',
        date: '',
    }
    const [values, setValues] = React.useState<FormValues>(initialFormState)
    const [errors, setErrors] = React.useState<FormErrors>(initialErrors)

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ): void => {
        switch (e.target.name) {
            case 'amount':
                const input = e.target.value
                const trimmedInput = input.length > 2 ? input.substr(2, input.length) : ''
                if (trimmedInput.length > 0 && trimmedInput.match('^[0-9,.]+$')) {
                    setValues({
                        ...values,
                        amount: e.target.value,
                    })
                    setErrors({ ...errors, amount: '' })
                }
                break
            case 'description':
                setValues({
                    ...values,
                    description: e.target.value,
                })
                break
            case 'date':
                setValues({
                    ...values,
                    date: null,
                })
                setErrors({ ...errors, date: '' })
                break
            case 'paidWith':
                setValues({
                    ...values,
                    paidWith: e.target.value as PaymentType,
                })
                break
            default:
                break
        }
    }

    const validate = (): FormErrors => {
        const newErrors: FormErrors = {
            amount: values.amount.length > 2 ? '' : 'Amount cannot be empty!',
            date: values.date ? '' : 'Date cannot be empty!',
        }
        setErrors(newErrors)
        return newErrors
    }

    const clearForm = (): void => {
        const form = document.getElementById('create-form') as HTMLFormElement
        form.reset()
    }

    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>): void => {
        e.preventDefault()
        const { amount, date } = validate()
        if (!amount && !date) {
            setTimeout(() => {
                setValues(initialFormState)
                clearForm()
            }, 3000)
        }
    }

    return (
        <StyledForm name="create-form" id="create-form">
            <Wrapper error={errors.amount}>
                <Input
                    placeholder="Amount"
                    type="string"
                    name="amount"
                    value={values.amount}
                    onChange={handleChange}
                    error={errors.amount}
                    required
                />
                <span>{errors.amount}</span>
            </Wrapper>
            <TextArea
                placeholder="Description"
                name="description"
                value={values.description}
                onChange={handleChange}
            />
            <Wrapper error={errors.date}>
                <DatePicker
                    name="date"
                    type="date"
                    onChange={handleChange}
                    error={errors.date}
                    max={''}
                    required
                />
                <span>{errors.date}</span>
            </Wrapper>
            <Payments>
                <Payment>
                    <label htmlFor="cash">
                        <input
                            type="radio"
                            id="cash"
                            name="paidWith"
                            value="cash"
                            onChange={handleChange}
                            checked={values.paidWith === PaymentType.CASH}
                        />
                        <div>
                            <span>Cash</span>
                        </div>
                    </label>
                </Payment>
                <Payment>
                    <label htmlFor="credit">
                        <input
                            type="radio"
                            id="credit"
                            name="paidWith"
                            value="credit"
                            onChange={handleChange}
                            checked={values.paidWith === PaymentType.CREDIT_CARD}
                        />
                        <div>
                            <span>Credit Card</span>
                        </div>
                    </label>
                </Payment>
                <Payment>
                    <label htmlFor="debit">
                        <input
                            type="radio"
                            id="debit"
                            name="paidWith"
                            value="debit"
                            onChange={handleChange}
                            checked={values.paidWith === PaymentType.DEBIT_CARD}
                        />
                        <div>
                            <span>Debit Card</span>
                        </div>
                    </label>
                </Payment>
            </Payments>
            <Button onClick={handleSubmit}>Add</Button>
        </StyledForm>
    )
}

export default Form
