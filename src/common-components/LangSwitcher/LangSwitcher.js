import { useState, useContext } from 'react';
import { SwitchContext } from '../../context/SwitchContext';
import {Wrapper, LanguageSwicthButton} from './LangSwitcher.styles';

const LangSwitcher = () => {
  const { LanguageSwitcher } = useContext(SwitchContext);
  const [langActive, setLangActive] = useState(true);
  const toSwitchLanguage = (language, langActive) => {
    LanguageSwitcher(language); 
    setLangActive(langActive);
  }

  return(
    <Wrapper>
    <LanguageSwicthButton 
      onClick={ () => toSwitchLanguage('PL', true) }
      langActive={langActive}
    >PL
    </LanguageSwicthButton>

    <LanguageSwicthButton 
      onClick={ () => toSwitchLanguage('RU', false)  }
      langActive={!langActive}
    >RU
    </LanguageSwicthButton>
  </Wrapper>
  )
}

export default LangSwitcher;