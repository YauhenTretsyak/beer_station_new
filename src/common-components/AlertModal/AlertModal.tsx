import React from 'react'
import * as Styled from './AlertModalStyles'
import {Button} from '../'

interface AlertModalProps {
    message: string;
    isOpen: boolean;
    modalFunc?: () => void;
    isErrorMessage?: boolean;
    width?: string;
    height?: string;
}

const AlertModal: React.FC<AlertModalProps> = ({
    message, 
    isErrorMessage, 
    width,
    height,
    isOpen,
    modalFunc,
}) => {

    const handleCloseModal = () => {
        if (modalFunc) {
            modalFunc()
        }
    }

    return (
        <Styled.AlertModal 
            isModalOpen={isOpen}
            isErrorMessage={isErrorMessage}
            width={width}
            height={height}
        >
            {modalFunc && (
                <Styled.CloseElem
                    onClick={() => handleCloseModal()}
                >
                    X
                </Styled.CloseElem>
            )}

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
