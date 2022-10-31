import React from 'react'
import * as Styled from './InputStyles'



interface InputProps {
    type: 'password' | 'number' | 'text';
    funcToChange: (pass: string) => void;
    onChange: (func: (value: string) => void, value: string) => void;
    placeholder?: string;
    incomeValue?: string;
}

const Input: React.FC<InputProps> = ({type, placeholder, incomeValue, funcToChange, onChange}) => {

    const handleOnChange = (value: string) => {
        if (type === 'number') {
            const replacedNumber = value.replace(/[^0-9+]/ig, '')
            const costValue = replacedNumber[0] === '0' ? replacedNumber.substring(1) : replacedNumber
            onChange(funcToChange, costValue)
        } else if (type === 'text'){
            onChange(funcToChange, value.toUpperCase())
        } else {
            onChange(funcToChange, value)
        }
    }

    return (
        <Styled.Input
            value={incomeValue}
            onChange={value => handleOnChange(value.target.value)}
            placeholder={placeholder}
            type={type === 'password' ? 'password' : ''}
        />
    )
}

export default Input
