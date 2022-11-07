import React from 'react'
import {InputProps} from '../types'
import * as Styled from './InputStyles'

const Input: React.FC<InputProps> = ({type, placeholder, incomeValue, funcToChange, onChange}) => {

    const onChangeNumber = (value: string) => {
        const replacedNumber = value.replace(/[^0-9]/ig, '')
        const costValue = replacedNumber[0] === '0' ? replacedNumber.substring(1) : replacedNumber
        onChange(funcToChange, costValue)
    }

    const onChangeText = (value: string) => {
        onChange(funcToChange, value.toUpperCase())
    }

    const onChangeFractionalNumber = (value: string) => {
        const replacedNumber = value.replace(/[^0-9.]/ig, '')
        onChange(funcToChange, replacedNumber)
    }

    const handleOnChange = (value: string) => {
        switch (type) {
        case 'number': 
            onChangeNumber(value)
            break
        case 'text': 
            onChangeText(value)
            break
        case 'fractionalNumber': 
            onChangeFractionalNumber(value)
            break
        default: 
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
