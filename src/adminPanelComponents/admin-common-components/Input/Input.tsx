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
        setInputValue(value)
        onChange(value)
 
    }

    useEffect(() => {
        if (!incomeValue) return
        setInputValue(incomeValue)
    }, [])

    return (
        <Styled.Input
            value={inputValue}
            onChange={value => handleOnChange(value.target.value)}
            type={type}
            placeholder={placeholder}
        />
    )
}

export default Input
