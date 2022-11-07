import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {setLanguage} from '../../store/slices/selectLanguageSlice'
import {Wrapper, LanguageSwicthButton} from './LangSwitcherStyles'

export type LangSwitcherProps = {
    width?: string
}

const LangSwitcher: React.FC<LangSwitcherProps> = ({width}) => {
    const dispatch = useDispatch()
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const langSwitch = useSelector(state => state.selectLanguage.langSwitch)
    const toSwitchLanguage = (language: string) => {
        dispatch(setLanguage(language))
    }

    return (
        <Wrapper width={width}>
            <LanguageSwicthButton 
                onClick={() => toSwitchLanguage('PL')}
                langActive={langSwitch === 'PL'}
            >PL
            </LanguageSwicthButton>

            <LanguageSwicthButton 
                onClick={() => toSwitchLanguage('EN')}
                langActive={langSwitch === 'EN'}
            >EN
            </LanguageSwicthButton>

            <LanguageSwicthButton 
                onClick={() => toSwitchLanguage('RU')}
                langActive={langSwitch === 'RU'}
            >RU
            </LanguageSwicthButton>
        </Wrapper>
    )
}

export default LangSwitcher
