import styled from "styled-components";
import screen_breakpoint from '../../styles/StyledElements/screen_breakpoints';
import { FlexContainer, SectionContainer } from "../../styles/StyledElements";
import right_arrow from '../../assets/icons/arrow_right.svg';

const HeaderContainer = styled(SectionContainer)``
const AdressInfoWrapper = styled(FlexContainer)`
  width: 43rem;

  ${ screen_breakpoint.xl } {
    width: 63rem;
  }
`
const AdressInfo = styled.p`
  margin-bottom: .5rem;
  width: 100%;
  max-width: 24.7rem;
  font-weight: ${({theme}) => theme.fontWeight.font_weightSemiBold};

  ${ screen_breakpoint.md } {
    margin-bottom: 0;
    font-size: 2.5rem;
  }

  ${ screen_breakpoint.xl } {
    margin-right: 1.6rem;
    font-size: 3rem;
  }
`
const Location = styled.p`
  position: relative;
  padding-left: 2.9rem;
  padding-right: 2.9rem;
  padding-top: .4rem;
  text-transform: uppercase;
  text-shadow: 0.2rem 0.2rem 0.2rem #ff9700;

  ${ screen_breakpoint.md } {
    font-size: 2.5rem;
  }

  ${ screen_breakpoint.xl } {
    padding-top: .2rem;
    font-size: 2.6rem;
  }

  &:before {
    content: '';
    position: absolute;
    top: .6rem;
    left: -1rem;
    background: url(${ right_arrow });
    width: 2.8rem;
    height: 2rem;
    background-size: contain;
    animation: run 2s infinite;
  }

  &:after {
    content: '';
    position: absolute;
    top: .6rem;
    right: -.4rem;
    background: url(${ right_arrow });
    width: 2.8rem;
    height: 2rem;
    transform: rotate(180deg);
    background-size: contain;
    animation: run-breake 2s infinite;
  }

  &:hover {
    cursor: pointer;
  }


`
const LanguageWrapper = styled(FlexContainer)`
  display: flex;
  justify-content: space-between;
  margin: auto;
  margin-right: 0;
  width: 8.9rem;
`
const LanguageSwicthButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 1.2rem;
  width: 4rem;
  height: 4.5rem;
  border: none;
  background-image: ${ props => props.langActive ?
    'linear-gradient(#fff 22%, #f0d04b 77%);' :
    'linear-gradient(#d1e8ea6b 22%, #8f7c2e 77%);'
  };
  box-shadow: inset 0 .3rem 1rem .1rem #00000059;
  border-radius: .7rem;
  font-size: 2.8rem;
  font-weight: ${({theme}) => theme.fontWeight.font_weightMedium};
  text-shadow: ${ props => props.langActive ? 
    '2px 2px 3px #7f3607;' :
    '.2rem .2rem .2rem #f4cf76;'
  };
  color: ${({theme}) => theme.colors.grey};
  transition: all .1s ease-in-out;

  &:hover {
    cursor: pointer;
    font-size: 3.5rem;
    padding-top: .5rem;
    background-image: linear-gradient(#fff 22%, #f0d04b 77%);
    font-weight: ${({theme}) => theme.fontWeight.font_weightBold};
    text-shadow: .2rem .2rem .3rem #7f3607;
  }
`

export {
  HeaderContainer,
  AdressInfoWrapper,
  AdressInfo,
  Location,
  LanguageWrapper,
  LanguageSwicthButton,
}