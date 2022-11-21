import React from 'react'
import {Button} from '..'
import {refreshIcon} from '../../dataComponents/svgIcons'
import * as Styled from './CardsButtonsBoxStyles'

type CardsButtonsBoxProps = {
    saveData: (isRefresh: boolean) => void;
    resetChanges: () => void;
    isDisabled: boolean;
    isRefresh?: boolean;
}

const CardsButtonsBox: React.FC<CardsButtonsBoxProps> = ({saveData, resetChanges, isDisabled, isRefresh}) => (
    <Styled.CardsButtonsBox>
        <Styled.ButtonsWrapper>
            <Button 
                onClick={() => saveData(false)}
                label="Save"
                type="apply"
                isDisabled={isDisabled}
            />
            <Button 
                onClick={() => resetChanges()}
                label="Cancel"
                type="cancel"
                isDisabled={isDisabled}
            />
        </Styled.ButtonsWrapper>
        {isRefresh && ( 
            <Styled.RefreshButton
                onClick={() => saveData(true)}
            >
                {refreshIcon}
            </Styled.RefreshButton>
        )}
    </Styled.CardsButtonsBox>
)

export default CardsButtonsBox
