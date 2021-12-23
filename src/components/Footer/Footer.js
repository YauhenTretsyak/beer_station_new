import { useContext } from 'react';
import { SwitchContext } from '../../hoc/SwitchContext';
import { footerData } from '../../dataComponents/footer.data.js';

import styled from 'styled-components';
import { SectionContainer } from '../../styles/StyledElements';

const FooterContainer = styled(SectionContainer)``
const FixBug = styled.p`
  position: absolute;
  left: -1000rem;
  font-size: .1rem;
`

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
      <FixBug>р</FixBug>
    </FooterContainer>
  )
}

export default Footer;