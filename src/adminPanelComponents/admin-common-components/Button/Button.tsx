import React from 'react'
import * as Styled from './ButtonStyles'

interface ButtonProps {
    label: string;
    onClick: () => void;
    type?: 'apply' | 'cancel';
    isDisabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({label, type, isDisabled, onClick}) => (
    <Styled.Button
        onClick={onClick}
        buttonType={type}
        isDisabled={isDisabled}
    >
        {label}
    </Styled.Button>
)

export default Button
