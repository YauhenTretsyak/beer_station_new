import React from 'react'
import {InputProps, InputTextTypesEnum} from '../types'
import * as Styled from './InputStyles'


const Input: React.FC<InputProps> = ({type, placeholder, incomeValue, funcToChange, onChange, textParams}) => {

    const onChangeNumber = (value: string) => {
        const replacedNumber = value.replace(/[^0-9]/ig, '')
        const costValue = replacedNumber[0] === '0' ? replacedNumber.substring(1) : replacedNumber
        onChange(costValue, funcToChange)
    }

    const onChangeText = (value: string) => {
        onChange(value, funcToChange, textParams)
    }

    const onChangeTextUpperCase = (value: string) => {
        onChange(value.toUpperCase(), funcToChange, textParams)
    }

    const onChangeFractionalNumber = (value: string) => {
        const replacedNumber = value.replace(/[^0-9.]/ig, '')
        onChange(replacedNumber, funcToChange)
    }

    const handleOnChange = (value: string) => {
        switch (type) {
        case InputTextTypesEnum.NUMBER: 
            onChangeNumber(value)
            break
        case InputTextTypesEnum.TEXT: 
            onChangeText(value)
            break
        case InputTextTypesEnum.TEXT_UPPERCASE: 
            onChangeTextUpperCase(value)
            break
        case InputTextTypesEnum.FRACTIONAL_NUMBER: 
            onChangeFractionalNumber(value)
            break
        default: 
            onChange(value, funcToChange)
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
