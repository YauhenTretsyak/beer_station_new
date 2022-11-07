import styled from 'styled-components'
import FlexContainer from '../../styles/StyledElements/FlexContainer'
import {Input, Select, Button} from '../../common-components'
import screen_breakpoints from '../../styles/StyledElements/screen_breakpoints'

interface AlertWrapperProps {
    isOpen: boolean;
}

export const LoginBar = styled(FlexContainer)`
    position: relative;
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

    & .login_bar_alert {
        margin-right: 0;
        width: 6.2rem;
        height: 3.2rem;
    }
`

export const LangSwitcherWrapper = styled.div`
    transform: translateY(-50%);

    ${screen_breakpoints.sm} {
        position: absolute;
        left: -2.7rem;
        transform: translateY(0%);
    }

    ${screen_breakpoints.md} {
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
    }
`

export const AlertWrapper = styled(FlexContainer)<AlertWrapperProps>`
    display: ${({isOpen}) => isOpen ? 'flex' : 'none'};
    position: absolute;
    top: 0;
    left: 0;
    justify-content: center;
    width: 100% !important;
    height: 100% !important;
    border-radius: .5rem;
    background-color: #320000e8;
    box-shadow: 0 0 .4rem .2rem ${({theme}) => theme.colors.red};
`

export const AlertMessage = styled.p`
    color: ${({theme}) => theme.colors.gold};
`

export const SelectLocation = styled(Select)``
export const InputPassword = styled(Input)``
export const ButtonLogin = styled(Button)``
