import React from "react"
import { v4 as uuidv4 } from 'uuid'
import {SelectOptions} from '../../types'
import * as Styled from "./SelectStyles"

interface SelectProps {
    selectOptionsData: SelectOptions[];
}

const Select: React.FC<SelectProps> = ({selectOptionsData}) => {

    const options = selectOptionsData.map(option => {
        return (
            <Styled.Option 
                key={uuidv4()}
                value={option.value}
            >
                {option.label}
            </Styled.Option>
        )
    })

    return (
        <Styled.Select>
            {options}
        </Styled.Select>
    )
}

export default Select
