import { useContext } from 'react';
import { SwitchContext } from '../../context/SwitchContext';
import { footerData } from '../../dataComponents/footer.data.js';

import styled from 'styled-components';
import { SectionContainer } from '../../styles/StyledElements';

const FooterContainer = styled(SectionContainer)``

const Footer = () => {

  const { langSwitch } = useContext(SwitchContext);
  let footerInfo;
  

  switch (langSwitch) {
    case 'PL': 
      footerInfo = footerData.PL
      break
    case 'RU': 
      footerInfo = footerData.RU
      break
    default:
      console.log(footerData.PL) 
  }


  return (
    <FooterContainer>
      { footerInfo.title }
    </FooterContainer>
  )
}

export default Footer;