import styled from 'styled-components'
import {FlexContainer} from '../../styles/StyledElements'
import screen_breakpoints from '../../styles/StyledElements/screen_breakpoints'

interface AdminEventsItem {
    isDataChanged: boolean; 
}

interface BoxLabel {
    boxLabel?: string;
    isRequired?: boolean;
}

interface AdditionalText {
    inputLabel?: string;
    isRequired?: boolean;
}

interface AlertModalWrapperProps {
    isAlertModalActive: boolean;
}

export const AdminEventsItem = styled.div<AdminEventsItem>`
    position: relative;
    display: block;
    margin-top: 1.7rem;
    margin-bottom: 1.7rem;
    padding: 1.5rem 4rem;
    width: 100%;
    border-radius: 1.4rem;
    text-decoration: none;
    background-color: #312f2f;
    box-shadow: 0 0 .7rem .1rem ${({theme}) => theme.colors.yellow};
    overflow: hidden;
    transition: all .2s ease-in-out;


    &:before {
        content: '';
        position: absolute;
        top: 50%;
        left: 1.7rem;
        width: .3rem;
        height: 8rem;
        border-radius: .4rem;
        background-color: ${({theme}) => theme.colors.brown_light};
        transform: translateY(-50%);
        transition: all .2s ease-in-out;
    }

    &:after {
        content: '';
        position: absolute;
        top: 50%;
        right: 1.7rem;
        width: .31rem;
        height: 8rem;
        border-radius: .4rem;
        background-color: ${({theme}) => theme.colors.brown_light};
        transform: translateY(-50%);
        transition: all .2s ease-in-out;
    }

    & p {
        color: ${({theme}) => theme.colors.orange};
    }

    ${({isDataChanged}) => isDataChanged
        ? `background-color: #4e3308;
            box-shadow: 0 0 1rem .3rem #ffe277;

            & p {
                text-shadow: .5rem .7rem .1rem #000;
            }

            &::before, &::after {
                height: 8.3rem;
                box-shadow: .5rem .5rem 0 0 #000;
            }`
            : ''
        }
`
export const AlertModalWrapper = styled(FlexContainer)<AlertModalWrapperProps>`
    position: absolute;
    top: 50%;
    left: 50%;
    display: none;
    display: ${({isAlertModalActive}) => isAlertModalActive && 'flex'};
    width: 100%;
    height: 100%;
    z-index: 3;
    background-color: #00000096;
    transform: translate(-50%, -50%);
`
export const BackgrndImage = styled.img`
    position: absolute;
    top: 0;
    right: 0;
    opacity: .1;

    ${screen_breakpoints.md} {
        opacity: .2;
    }
`

export const EventIndex = styled.span`
    position: absolute;
    top: 1rem;
    left: 1.5rem;
    color: ${({theme}) => theme.colors.silver};
`

export const RemoveButton = styled.button`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 1.6rem;
    right: 3.2rem;
    width: 1.5rem;
    height: 1.5rem;
    background: none;
    border: none;

    &:hover {
        cursor: pointer;
    }

    & > svg {
        width: 1.5rem;
        height: 1.5rem;
    }
`
export const ImageBox = styled(FlexContainer)`
    width: 5rem;
    height: 5rem;
    & > img {
        max-width: 100%;
        max-height: 100%;
    }
`
export const ChangeContent = styled.div``

export const ElementsLine = styled(FlexContainer)<BoxLabel>`
    position: relative;
    justify-content: flex-start;
    gap: 2rem;
    margin-bottom: 1rem;
    padding: 3rem 1rem 1rem 1rem;
    border-bottom: .1rem solid ${({theme}) => theme.colors.black};

    &::before {
        content: '${({boxLabel}) => boxLabel}';
        position: absolute;
        top: .5rem;
        left: 1rem;
        font-size: 1.7rem;
        color: ${({theme}) => theme.colors.orange};
        text-shadow: .2rem .4rem .1rem ${({theme}) => theme.colors.black};
    }

    &::after {
        ${({isRequired}) => isRequired && (
        `content: '*';
        position: absolute;
        top: .5rem;
        left: -.2rem;
        font-size: 1.7rem;
        color: red;
        `
        )}
    }
`

export const InputWrapper = styled(FlexContainer)<AdditionalText>`
    position: relative;
    justify-content: flex-start;
    gap: 2.2rem;
    width: 100%;
    
    ${screen_breakpoints.md} {
        width: 20rem;
        gap: 2rem;
    }

    & > input {
        width: 100%;
    }

    &::before {
        content: '${({inputLabel}) => inputLabel}';
        position: absolute;
        top: -1.7rem;
        left: 0;
        font-size: 1.7rem;
        color: ${({theme}) => theme.colors.orange};
        text-shadow: .2rem .4rem .1rem ${({theme}) => theme.colors.black};
    }
    &::after {
        ${({isRequired}) => isRequired && (
        `content: '*';
        position: absolute;
        top: -1.7rem;
        left: -1.2rem;
        font-size: 1.7rem;
        color: red;
        `
        )}
    }
`

export const InputWrapperSecondary = styled(FlexContainer)<AdditionalText>`
    position: relative;
    gap: 1rem;
    justify-content: flex-start;
    width: 100%;

    ${screen_breakpoints.md} {
        width: 23rem;
    }

    & > input {
        width: 100%;
    }

    & > textarea {
        width: 100%;
    }

    &::before {
        content: '${({inputLabel}) => inputLabel}';
        position: absolute;
        top: -1.5rem;
        right: .8rem;
        font-size: 1.5rem;
        font-weight: 100;
        color: ${({theme}) => theme.colors.gold};
        text-shadow: .2rem .4rem .1rem ${({theme}) => theme.colors.black};
    }
`

export const InputLabel = styled.span`
    font-size: 2rem;
    color: ${({theme}) => theme.colors.silver};

    ${screen_breakpoints.sm} {
        font-size: 1.7rem;
    }

    ${screen_breakpoints.md} {
        font-size: 2rem;
    }
`
