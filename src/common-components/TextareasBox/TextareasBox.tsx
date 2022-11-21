import React from 'react'
import {v4 as uuidv4} from 'uuid'
import {Textarea} from '..'
import {TextareasBoxProps} from '../types'
import * as Styled from './TextareasBoxStyles'

const TextareasBox: React.FC<TextareasBoxProps> = ({textareaParams}) => {

    const textareaElements = textareaParams.map(item => (
        <Styled.InputWrapper 
            key={uuidv4()}
            textareaLabel={item.textareaLabel}
        >
            <Textarea
                textParams={item.textParams}
                incomeValue={item.incomeValue}
                placeholder={item.placeholder}
                onChange={item.handleOnChange}
            />
        </Styled.InputWrapper>
    ))

    return (
        <>
            {textareaElements}
        </>
    )
}

export default TextareasBox
