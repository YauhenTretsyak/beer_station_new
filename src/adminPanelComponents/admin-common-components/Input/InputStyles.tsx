import styled from 'styled-components'
import screen_breakpoints from '../../styles/screen_breakpoints'

export const Input = styled.input`
    font-size: 1.4rem;
    background: inherit;
    outline: none;
    color: ${({theme}) => theme.colors.silver_light};

    ${screen_breakpoints.md} {
        font-size: 1.6rem;
    }

    &::placeholder {
        color: ${({theme}) => theme.colors.silver};
    }
`
