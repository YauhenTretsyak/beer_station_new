import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import useLanguage from '../../hooks/useLanguage'
import {setLocationKind} from '../../store/slices/setLocationParamsSlice'
import {translations} from '../translations'
import * as Styled from './KindSwitcherStyles'


const KindSwitcher: () => JSX.Element = () => {
    const dispatch = useDispatch()
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const {locationKind} = useSelector(state => state.actualLocationParams)
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const langSwitch = useSelector(state => state.selectLanguage.langSwitch)

    const buttonTitle = useLanguage(translations, langSwitch).kindSwitcher

    const toSwitchKind = (newLocationKind: string) => {
        dispatch(setLocationKind(newLocationKind))
    }

    return (
        <Styled.Wrapper>
            <Styled.KindSwitchButton 
                onClick={() => toSwitchKind('beer')}
                active={locationKind === 'beer'}
            >
                {buttonTitle.beeCards}
            </Styled.KindSwitchButton>

            <Styled.KindSwitchButton 
                onClick={() => toSwitchKind('events')}
                active={locationKind === 'events'}
            >
                {buttonTitle.events}
            </Styled.KindSwitchButton>
        </Styled.Wrapper>
    )
}

export default KindSwitcher