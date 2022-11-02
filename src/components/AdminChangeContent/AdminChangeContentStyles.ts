import styled from 'styled-components'
import FlexContainer from '../../styles/StyledElements/FlexContainer'
import SectionContainer from '../../styles/StyledElements/SectionContainer'
import screen_breakpoints from '../../styles/StyledElements/screen_breakpoints'
import {Input, Select, Button} from '../../common-components'

interface ErrorMessageWrapperProps {
    isOpen: boolean;
}

export const AdminChangeContent = styled(SectionContainer)`
    
`
export const LoginBar = styled(FlexContainer)`
    justify-content: center;
    align-items: center;
    flex-direction: column;

    ${screen_breakpoints.sm} {
        justify-content: flex-end;
        flex-direction: row;
    }

    & > select {
        margin-bottom: 1rem;
        padding: .6rem 1rem;
        border-radius: .5rem;

        ${screen_breakpoints.sm} {
            margin-bottom: 0;
            margin-right: 2rem;
        }
    }

    & > input {
        margin-bottom: 1rem;
        padding: .5rem 1rem;
        border: .1rem solid ${({theme}) => theme.colors.gold};
        font-size: 1.8rem;
        border-radius: .5rem;

        ${screen_breakpoints.sm} {
            margin-bottom: 0;
            margin-right: 2rem;
        }
    }

    & > div {
        margin-right: 0;
        width: 6.2rem;
        height: 3.2rem;
    }
`
export const AdminCardsWrapper = styled(FlexContainer)`
    flex-wrap: wrap;
    justify-content: center;

    ${screen_breakpoints.sm} {
        justify-content: space-between;
    }
`
export const SelectLocation = styled(Select)``
export const InputPassword = styled(Input)``
export const ButtonLogin = styled(Button)``
export const LocationTitle = styled.p`
    margin-bottom: 1rem;
    text-transform: capitalize;
    text-align: center;

    ${screen_breakpoints.md} {
        margin-bottom: 2rem;
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
