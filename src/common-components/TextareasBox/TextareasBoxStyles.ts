import styled from 'styled-components'
import {FlexContainer} from '../../styles/StyledElements'

interface AdditionalText {
    textareaLabel?: string;
}

export const InputWrapper = styled(FlexContainer)<AdditionalText>`
    position: relative;
    gap: 1rem;
    width: 23rem;

    & > input {
        width: 100%;
    }

    & > textarea {
        width: 100%;
    }

    &::before {
        content: '${({textareaLabel}) => textareaLabel}';
        position: absolute;
        top: -1.5rem;
        right: .8rem;
        font-size: 1.5rem;
        font-weight: 100;
        color: ${({theme}) => theme.colors.gold};
        text-shadow: .2rem .4rem .1rem ${({theme}) => theme.colors.black};
    }
`
