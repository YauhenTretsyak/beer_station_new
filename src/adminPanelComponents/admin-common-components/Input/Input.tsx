import React, {useEffect, useState} from 'react'
import * as Styled from './InputStyles'

interface InputProps {
    type: 'password' | 'number' | 'text';
    onChange: (value: string) => void;
    placeholder?: string;
    incomeValue?: string;
}

const Input: React.FC<InputProps> = ({type, placeholder, incomeValue, onChange}) => {

    const [inputValue, setInputValue] = useState<string>('')

    const handleOnChange = (value: string) => {
        if (type === 'number') {
            const replacedNumber = value.replace(/[^0-9+]/ig, '')
            const costValue = replacedNumber[0] === '0' ? replacedNumber.substring(1) : replacedNumber

            setInputValue(costValue)
            onChange(costValue)
        } else {
            setInputValue(value.toUpperCase())
            onChange(value.toUpperCase())
        }
    }

    useEffect(() => {
        if (!incomeValue) return
        setInputValue(incomeValue)
    }, [])

    return (
        <Styled.Input
            value={inputValue}
            onChange={value => handleOnChange(value.target.value)}
            placeholder={placeholder}
        />
    )
}

export default Input
