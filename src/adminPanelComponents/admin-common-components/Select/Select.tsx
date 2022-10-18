import React, {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import {SelectOptions} from '../../types'
import * as Styled from './SelectStyles'

interface SelectProps {
    selectOptionsData: SelectOptions[];
    onChange: (option: string) => void;
}

const Select: React.FC<SelectProps> = ({selectOptionsData, onChange}) => {

    const [selectValue, setSelectValue] = useState('kepna')

    const options = selectOptionsData.map(option => (
        <Styled.Option 
            key={uuidv4()}
            value={option.value}
        >
            {option.label}
        </Styled.Option>
    ))

    const handleSelect = (value: string) => {
        setSelectValue(value)
        onChange(value)
    }

    return (
        <Styled.Select 
            value={selectValue}
            onChange={option => handleSelect(option.target.value)}
        >
            {options}
        </Styled.Select>
    )
}

export default Select
