import React, {useState, useContext} from 'react'
import {SwitchContext} from '../../context/SwitchContext'
import {Wrapper, LanguageSwicthButton} from './LangSwitcherStyles'

const LangSwitcher: React.FC<JSX.Element> = () => {
    const {LanguageSwitcher} = useContext(SwitchContext)
    const [langActive, setLangActive] = useState<boolean>(true)
    const toSwitchLanguage = (language: string, langActive: boolean) => {
        LanguageSwitcher(language) 
        setLangActive(langActive)
    }

    return (
        <Wrapper>
            <LanguageSwicthButton 
                onClick={() => toSwitchLanguage('PL', true)}
                langActive={langActive}
            >PL
            </LanguageSwicthButton>

            <LanguageSwicthButton 
                onClick={() => toSwitchLanguage('RU', false)}
                langActive={!langActive}
            >RU
            </LanguageSwicthButton>
        </Wrapper>
    )
}

export default LangSwitcher