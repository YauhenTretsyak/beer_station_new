import styled from "styled-components";
import screen_breakpoints from '../../styles/StyledElements/screen_breakpoints';
import { FlexContainer, SectionContainer } from "../../styles/StyledElements";
import mapsIcon from '../../assets/icons/maps-icon.svg';
import tel from "../../assets/icons/phone-icon.svg";

const HeaderContainer = styled(SectionContainer)``
const AdressInfoWrapper = styled(FlexContainer)`
  justify-content: center;
  flex-direction: column;
  margin-bottom: .8rem;
  width: 100%;
  max-width: 43rem;

  ${ screen_breakpoints.xss } {
    justify-content: space-between;
    margin-bottom: 0;
  }

  ${ screen_breakpoints.xl } {
    flex-direction: row;
    max-width: 56rem;
    min-height: 5rem;
  }

  ${ screen_breakpoints.xxl } {
    flex-direction: row;
    max-width: 63rem;
    min-height: 5rem;
  }
`
const AdressInfo = styled.a`
  position: relative;
  margin-bottom: .5rem;
  padding-left: 3rem;
  width: 100%;
  max-width: fit-content;
  font-weight: ${({theme}) => theme.fontWeight.font_weightSemiBold};
  text-shadow: .3rem .3rem .3rem #000;
  text-decoration: none;
  text-align: center;
  color: ${({theme}) => theme.colors.yellow};

  ${ screen_breakpoints.xss } {
    padding-left: 3rem;
    max-width: 24rem;
    text-align: left;
  }

  ${ screen_breakpoints.md } {
    margin-bottom: 0;
    font-size: 2.5rem;
  }

  ${ screen_breakpoints.xl } {
    max-width: 32.7rem;
    margin-right: 1.6rem;
    font-size: 3rem;
  }

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 43%;
    width: 2.8rem;
    height: 2.8rem;
    transform: translateY(-50%);
    background-image: url(${ mapsIcon }) ;
    background-size: contain;
  }
`
const Wrapper = styled(FlexContainer)`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 40rem;

  ${ screen_breakpoints.xl } {
   max-width: 32rem;
  }

  ${ screen_breakpoints.xxl } {
   max-width: 38.5rem;
  }
`
const Telephone = styled.a`
  position: relative;
  padding-left: 2.8rem;
  text-decoration: none;
  color: #cda500;
  text-shadow: .2rem .4rem .1rem #000;

  &::before {
    content: '';
    position: absolute;
    top: 55%;
    left: 0;
    width: 2.8rem;
    height: 2.8rem;
    background: url(${tel});
    transform: translateY(-50%);
  }
`
const LangWrapper = styled(FlexContainer)`
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

    ${ screen_breakpoints.lg } {
      font-size: 3.5rem;
      padding-top: .5rem;
      background-image: linear-gradient(#fff 22%, #f0d04b 77%);
      font-weight: ${({theme}) => theme.fontWeight.font_weightBold};
      text-shadow: .2rem .2rem .3rem #7f3607;
    }
  }
`

export {
  HeaderContainer,
  AdressInfoWrapper,
  AdressInfo,
  Wrapper,
  Telephone,
  LangWrapper,
  LanguageSwicthButton,
}