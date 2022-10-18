import React from 'react'
import * as Styled from './ButtonStyles'

interface ButtonProps {
    label: string;
    onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({label, onClick}) => (
    <Styled.Button
        onClick={onClick}
    >
        {label}
    </Styled.Button>
)

export default Button
