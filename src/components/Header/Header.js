import { useContext } from 'react';
import { Navigation } from '../index';
import { SwitchContext } from '../../hoc/SwitchContext';

import { FlexContainer } from "../../styles/StyledElements";
import {
  HeaderContainer,
  AdressInfoWrapper,
  AdressInfo,
  Location,
  LanguageWrapper,
  LanguageSwicthButton,
} from './Header.styled';


const Header = () => {

  const { locationSwitch, langSwitch, LanguageSwitcher, LocationSwitcher } = useContext(SwitchContext);
  
  let langActive;
  const locationAdress = locationSwitch ? 'Lwowska, 17' : 'Kępna, 15'
  const barAdress = locationSwitch ? 'Warszawa, ul. Kępna, 15' :
      'Warszawa, ul. Lwowska, 17';

  switch (langSwitch) {
    case 'PL': 
      langActive = true;
      break
    case 'RU': 
      langActive = false;
      break
    default: 
      langActive = true;
  }

  return (
    <HeaderContainer>
      
      <Navigation />
      
      <FlexContainer>
        <AdressInfoWrapper>
          <AdressInfo>
            { barAdress }
          </AdressInfo>
          <Location onClick={ () => LocationSwitcher() }>
            { locationAdress }
          </Location>
        </AdressInfoWrapper>
        <LanguageWrapper>
          <LanguageSwicthButton 
            onClick={ () => LanguageSwitcher('PL') }
            langActive={langActive}
          >PL
          </LanguageSwicthButton>

          <LanguageSwicthButton 
            onClick={ () => LanguageSwitcher('RU') }
            langActive={!langActive}
          >RU
          </LanguageSwicthButton>
        </LanguageWrapper>
      </FlexContainer>
    </HeaderContainer>
  )
}

export default Header;