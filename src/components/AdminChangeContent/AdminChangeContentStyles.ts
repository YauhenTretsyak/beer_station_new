import styled from 'styled-components'
import FlexContainer from '../../styles/StyledElements/FlexContainer'
import SectionContainer from '../../styles/StyledElements/SectionContainer'
import screen_breakpoints from '../../styles/StyledElements/screen_breakpoints'

interface ErrorMessageWrapperProps {
    isOpen: boolean;
}

export const AdminChangeContent = styled(SectionContainer)``

export const LocationTitle = styled.p`
    margin-bottom: 1rem;
    text-transform: capitalize;
    text-align: center;

    ${screen_breakpoints.md} {
        margin-bottom: 0;
        font-size: 4.5rem;
    }
`

export const ErrorMessageWrapper = styled(FlexContainer)<ErrorMessageWrapperProps>`
    display: ${({isOpen}) => isOpen ? 'flex' : 'none'};
    position: absolute;
    top: 50%;
    left: 50%;
    justify-content: center;
    border-radius: .5rem;
    background-color: #320000e8;
    box-shadow: 0 0 .4rem .2rem ${({theme}) => theme.colors.red};
    transform: translate(-50%, -50%);
`
