import { useContext, useState } from 'react';
import { SwitchContext } from '../../context/SwitchContext';
import { v4 as uuidv4 } from "uuid";
import screen_breakpoints from '../../styles/StyledElements/screen_breakpoints';
import locations from "../../dataComponents/localSelector.data";
import styled from "styled-components";
import { FlexContainer } from "../../styles/StyledElements";
import selectorTriangle from "../../assets/icons/triangle.svg";

const Selector = styled(FlexContainer)`
  position: relative;
  margin-top: 0;
  width: 21rem;
  justify-content: center;
  transition: all .2s ease-in-out;
  
  ${screen_breakpoints.lg} {
    margin-top: ${props => props.isDisplay ? '-7rem' : '0'};
  }
`;
const Wrapper = styled.div(
  ({isDisplay}) => `
    position: absolute;
    top: 5rem;
    left: 53%;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 18rem;
    opacity: 0;
    z-index: 10;
    transform: translateX(-50%);
    transition: all .3s ease-in-out;
    ${ isDisplay ? 'opacity: 1; height: fit-content; font-size: 2.6rem;' 
        : 
      'opacity: 0;  height: 0; font-size: 0;' 
    };
  `
);
const Paragraph = styled.p(
  ({isDisplay}) => `
  position: relative;
  padding-left: 3rem;
  padding: 1rem 1rem .6rem 4rem;
  cursor: pointer;
  font-size: 2.6rem;
  color: #ea8f0a;
  border: .1rem solid #ea8f0a59;
  border-radius: 1rem;
  transition: all .3s ease-in-out;
  ${isDisplay ? 'border: .1rem solid #ea8f0a;':''}

  &::after {
    content: '';
    position: absolute;
    left: 1rem;
    top: 50%;
    transform: ${isDisplay ? 'translateY(-50%) rotate(180deg);' 
      :
      'translateY(-50%);'
    }
    width: 2.5rem;
    height: 2.5rem;
    background: url(${selectorTriangle}) no-repeat;
    background-size: cover;
    transition: all .2s ease-in-out;
  }
`
);
const LangPlace = styled.p`
  padding: .6rem 1rem;
  width: fit-content;
  text-align: center;
  cursor: pointer;
  border-radius: 2rem;
  color: #ffee26;
  background: #0000007d;
  box-shadow: inset 1px -6px 8px 0 #b09700f7;
`;


const LocalSelector = () => {

  const { locationSwitch, LocationSwitcher } = useContext(SwitchContext);
  const [ isDisplay, setIsDisplay ] = useState(false);

  const HandlerLocation = (e) => {
    const location = e.target.getAttribute("data-local");
    const address = e.target.textContent;
    LocationSwitcher(location, address);
    setIsDisplay(false)
  }

  const local = locations.map(item => {
    return(
      <LangPlace 
        key={uuidv4()}
        data-local={item.data}
        onClick={ HandlerLocation }
      >
        { item.loc }
      </LangPlace>
    )
  })

  return(
    <Selector isDisplay={isDisplay}>
      <Paragraph 
        isDisplay={isDisplay}
        onClick={ () => setIsDisplay(!isDisplay) }
      >
        { locationSwitch.address }
      </Paragraph>
      <Wrapper isDisplay={isDisplay}>
        {local}
      </Wrapper>
    </Selector>
  )
}

export default LocalSelector;