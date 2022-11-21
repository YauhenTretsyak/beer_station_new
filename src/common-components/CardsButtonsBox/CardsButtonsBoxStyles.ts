import styled from 'styled-components'
import FlexContainer from '../../styles/StyledElements/FlexContainer'

export const CardsButtonsBox = styled(FlexContainer)`
    justify-content: space-between;
    align-items: center;
    margin-top: 1.4rem;
`
export const ButtonsWrapper = styled(FlexContainer)`
    justify-content: start;
    gap: 1.4rem;
`
export const RefreshButton = styled.button`
    width: 2.5rem;
    height: 2.5rem;
    border: none;
    background: none;

    & > svg {
        color: ${({theme}) => theme.colors.green_light};
        width: 100%;
        height: 100%;

        &:hover {
            cursor: pointer;
        }
    }
`

