import styled from 'styled-components'
import FlexContainer from '../../styles/StyledElements/FlexContainer'

interface AlertModalStylesProps {
    isModalOpen: boolean;
    width?: string;
    height?: string;
    isErrorMessage?: boolean;
}

export const AlertModal = styled(FlexContainer)<AlertModalStylesProps>`
    position: relative;
    display: none;
    display: ${({isModalOpen}) => isModalOpen ? 'flex' : 'none'};
    flex-direction: column;
    width: 100%;
    max-width: 40rem;
    /* height: 100%;
    max-height: 10rem; */
    max-width: ${({width}) => width};
    min-height: ${({height}) => height};
    padding: 2rem 2.5rem;
`
export const CloseElem = styled.span`
    position: absolute;
    top: 1rem;
    right: 1rem;
    font-size: 1.5rem;
    color: ${({theme}) => theme.colors.orange};

    &:hover {
        cursor: pointer;
    }
`

export const Message = styled.p`
   text-align: center;
`
