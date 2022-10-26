import React, {useEffect, useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import {SelectOptions} from '../../types'
import * as Styled from './SelectStyles'

interface SelectProps {
    selectOptionsData: SelectOptions[];
    onChange: (option: string) => void;
    selectedValue: string;
}

const Select: React.FC<SelectProps> = ({selectOptionsData, selectedValue, onChange}) => {
    const [selectValue, setSelectValue] = useState(selectedValue)

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
        setSelectValue(value)
        console.log(value)
        onChange(value)
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
