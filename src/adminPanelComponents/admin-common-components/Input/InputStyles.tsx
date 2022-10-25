import styled from 'styled-components'

export const Input = styled.input`
    font-size: 1.6rem;
    background: inherit;
    outline: none;
    color: ${({theme}) => theme.colors.silver_light};

    &::placeholder {
        color: ${({theme}) => theme.colors.silver};
    }
`
