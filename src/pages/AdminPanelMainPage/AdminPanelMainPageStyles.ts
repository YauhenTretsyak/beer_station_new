import styled from 'styled-components'

export const Title = styled.h4`
    color: ${({theme}) => theme.colors.red};
    text-shadow: .3rem .3rem .2rem ${({theme}) => theme.colors.black};
`
