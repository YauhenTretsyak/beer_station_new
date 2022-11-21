import React, { useState } from 'react'
import {TextareaProps} from '../types'
import * as Styled from './TextareaStyles'



const Textarea: React.FC<TextareaProps> = ({incomeValue, placeholder, funcToChange, onChange, textParams}) => {

    const handleChange = (value: string) => {
        onChange(value, funcToChange, textParams)
    }
    
    return (
        <Styled.Textarea 
            value={incomeValue}
            onChange={e => handleChange(e.target.value)}
            placeholder={placeholder}
        />
    )
}

export default Textarea
