import { useContext, useEffect } from 'react';
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
import { useState } from 'react/cjs/react.development';


const Header = () => {

  const { locationSwitch, langSwitch, LanguageSwitcher, LocationSwitcher } = useContext(SwitchContext);
  
  let langActive;
  const linkKepna = 'https://g.page/beer-station-pl?share'
  const linkLwowska = 'https://goo.gl/maps/dDsVtjJuHJ3BgTit9'
  const [locationAdress, setLocationAdress] = useState('Lwowska, 17')
  const [barAdress, setBarAdress] = useState('Warszawa, ul. Kępna, 15')
  const [googleLocation, setGoogleLocation] = useState(linkKepna)

  useEffect(() => {
    if(locationSwitch) {
      setLocationAdress('Lwowska, 17')
      setBarAdress('Warszawa, ul. Kępna, 15')
      setGoogleLocation(linkKepna)
    } else {
      setLocationAdress('Kępna, 15')
      setBarAdress('Warszawa, ul. Lwowska, 17')
      setGoogleLocation(linkLwowska)
    }
  }, [locationSwitch])

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
          <AdressInfo 
            href={ googleLocation }
            target='_blank'
          >
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