import React from 'react'
import {doneIcon, cancelIcon} from '../../dataComponents/svgIcons'
import * as Styled from './AlertCardStyles'

export interface AlertCardProps {
    isAlertActive: {
        isActive: boolean
        isSuccessful: boolean
    }
}

const AlertCard: React.FC<AlertCardProps> = ({isAlertActive}) => (
    <Styled.Alert
        isAlertActive={isAlertActive.isActive}
    >
        {isAlertActive.isSuccessful ? doneIcon : cancelIcon}
    </Styled.Alert>
)

export default AlertCard
