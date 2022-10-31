import React, { useState } from 'react'
import * as Styled from './AlertModalStyles'
import {Button} from '../'

interface AlertModalProps {
    message: string;
    isOpen: boolean;
    isErrorMessage?: boolean;
    width?: string;
    modalFunc: () => void;
}

const AlertModal: React.FC<AlertModalProps> = ({
    message, 
    isErrorMessage, 
    width, 
    isOpen,
    modalFunc,
}) => {

    const handleCloseModal = () => {
        modalFunc()
    }

    return (
        <Styled.AlertModal 
            isModalOpen={isOpen}
            isErrorMessage={isErrorMessage}
            width={width}
        >
            <Styled.CloseElem
                onClick={() => handleCloseModal()}
            >
                X
            </Styled.CloseElem>

            <Styled.Message>
                {message}
            </Styled.Message>
            <Button
                label="Ok"
                onClick={() => handleCloseModal()}
            />
        </Styled.AlertModal>
    )
}

export default AlertModal
