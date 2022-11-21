import React from 'react'
import {v4 as uuidv4} from 'uuid'
import {Input} from '..'
import {InputsBoxProps} from '../types'
import * as Styled from './InputsBoxStyles'

const InputsBox: React.FC<InputsBoxProps> = ({inputParams}) => {

    const inputsElements = inputParams.map(item => (
        <Styled.InputWrapper 
            key={uuidv4()}
            inputLabel={item.inputLabel}
        >
            <Input 
                type={item.inputType}
                placeholder={item.placeholder}
                textParams={item.textParams}
                incomeValue={item.incomeValue}
                onChange={item.onChange}
            />
        </Styled.InputWrapper>
    ))

    return (
        <>
            {inputsElements}
        </>
    )
}

export default InputsBox
