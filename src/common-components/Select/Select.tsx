import React, {useEffect, useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import {SelectOptions} from '../types'
import * as Styled from './SelectStyles'

interface SelectProps {
    selectOptionsData: SelectOptions[];
    funcToChange: (option: string) => void;
    onChange: (func: (value: string) => void, value: string) => void;
    selectedValue: string;
}

const Select: React.FC<SelectProps> = ({selectOptionsData, selectedValue, funcToChange, onChange}) => {

    const options = selectOptionsData.map(option => (
        <Styled.Option 
            key={uuidv4()}
            value={option.id}
            selected={option.id === selectedValue}
        >
            {option.label}
        </Styled.Option>
    ))

    const handleSelect = (value: string) => {
        onChange(funcToChange, value)
    }

    return (
        <Styled.Select 
            onChange={option => handleSelect(option.target.value)}
        >
            {options}
        </Styled.Select>
    )
}

export default Select
