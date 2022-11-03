import styled from 'styled-components'
import screen_breakpoints from '../../styles/StyledElements/screen_breakpoints'
import {FlexContainer, SectionContainer} from '../../styles/StyledElements'
import mapsIcon from '../../assets/icons/maps-icon.svg'
import tel from '../../assets/icons/phone-icon.svg'

export const HeaderContainer = styled(SectionContainer)``
export const AdressInfoWrapper = styled(FlexContainer)`
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
export const AdressInfo = styled.a`
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
export const Wrapper = styled(FlexContainer)`
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
export const Telephone = styled.a`
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
export const InfoContainer = styled(FlexContainer)``
