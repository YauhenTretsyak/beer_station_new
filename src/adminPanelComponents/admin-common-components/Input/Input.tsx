import React, {useState} from 'react'
import * as Styled from './InputStyles'

interface InputProps {
    type: 'password' | 'number' | 'text';
    onChange: (pass: string | number) => void;
}

const Input: React.FC<InputProps> = ({type, onChange}) => {

    const [inputValue, setInputValue] = useState<string>('')

    const handleOnChange = (value: string) => {
        setInputValue(value)
        onChange(value)
    }

    return (
        <Styled.Input
            value={inputValue}
            onChange={value => handleOnChange(value.target.value)}
            type={type}
        />
    )
}

export default Input
