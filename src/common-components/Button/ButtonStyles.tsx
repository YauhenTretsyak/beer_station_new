import styled from 'styled-components'

interface ButtonProps {
    buttonType?: 'apply' | 'cancel';
    isDisabled?: boolean;
}

export const Button = styled.button<ButtonProps>(
    ({theme, buttonType, isDisabled}) => `
        display: flex;
        align-items: center;
        justify-content: center;
        width: 5.6rem;
        height: 2.2rem;
        border-radius: .7rem;
        border: none;
        font-size: 1.8rem;
        line-height: 1;
        opacity: ${isDisabled ? '0.2' : '1'};
        background-color: ${theme.colors.yellow};
        background-color: ${buttonType === 'apply' ? theme.colors.green : ''};
        background-color: ${buttonType === 'cancel' ? theme.colors.red : ''};
        box-shadow: ${buttonType === 'apply' ? `0 0 .2rem .3rem ${theme.colors.green}` : ''};
        box-shadow: ${buttonType === 'cancel' ? `0 0 .2rem .3rem ${theme.colors.red}` : ''};

        &:hover {
            cursor: pointer;
        }
    `
)
