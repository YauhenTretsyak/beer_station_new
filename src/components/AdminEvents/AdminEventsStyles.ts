import styled from 'styled-components'

interface AddButtonProps {
    isButtonActive: boolean
}

export const AdminEvents = styled.div``
export const AddButtonWrapper = styled.div``
export const AddButton = styled.button<AddButtonProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: .5rem;
    border: none;
    font: 2rem;
    background: none;
    color: ${({theme}) => theme.colors.green_light};
    transition: all .2s ease-in-out;
    opacity: ${({isButtonActive}) => isButtonActive ? '1' : '.3'};

    & > svg {
        width: 2rem;
        height: 2rem;
    }

    &:hover {
        cursor: pointer;
        text-shadow: 0 0 2rem ${({theme}) => theme.colors.green_light};
    }
`
export const ButtonTitle = styled.span``
