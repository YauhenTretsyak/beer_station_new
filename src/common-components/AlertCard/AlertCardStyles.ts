import styled from 'styled-components'
import {FlexContainer} from '../../styles/StyledElements'

interface AlertProps {
    isAlertActive: boolean;
}

export const Alert = styled(FlexContainer)<AlertProps>`
    position: absolute;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    width: 0;
    height: 0;
    opacity: 0;
    border-radius: 1.4rem;
    background-color: #000000c2;
    transition: all .12s ease-in-out;
    z-index: 2;

    ${({isAlertActive}) => isAlertActive 
        ? 'width: 100%; height: 100%; opacity: 1;': ''
    }

    & > svg {
        color: ${({theme}) => theme.colors.green_light};
        width: 0;
        height: 0;
        opacity: 0;
        transition: all .2s ease-in-out;

        ${({isAlertActive}) => isAlertActive 
        ? 'width: 6rem; height: 6rem; opacity: 1;': ''
    }
    }
`
