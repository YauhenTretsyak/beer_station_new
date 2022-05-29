import { useContext } from 'react';
import useLocation from '../../hooks/useLocation';
import { Navigation } from '../index';
import { LocalSelector } from '../../common-components';
import { SwitchContext } from '../../context/SwitchContext';
import headerData from '../../dataComponents/header.data';

import { FlexContainer } from "../../styles/StyledElements";
import {
  HeaderContainer,
  AdressInfoWrapper,
  AdressInfo,
  Wrapper,
  Telephone,
  LangWrapper,
  LanguageSwicthButton,
} from './Header.styles';


const Header = (props) => {
  
  const { navigationLinksData, mainPage } = props;
  const { locationSwitch, langSwitch, LanguageSwitcher } = useContext(SwitchContext);
  const addressData = useLocation(headerData, locationSwitch.location);
  
  let langActive;

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
      
      <Navigation 
        navigationLinksData={ navigationLinksData }
        mainPage={ mainPage }
      />
      
      <FlexContainer>
        <AdressInfoWrapper>
          <AdressInfo 
            href={ addressData.googleLocation }
            target='_blank'
          >
            { addressData.barAdress }
          </AdressInfo>

          <LocalSelector />

        </AdressInfoWrapper>
        <Wrapper>
          <Telephone href={`tel:+48 ${addressData.tel}`}>
            {addressData.tel}
          </Telephone>
          <LangWrapper>
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
          </LangWrapper>
        </Wrapper>
      </FlexContainer>
      
    </HeaderContainer>
  )
}

export default Header;