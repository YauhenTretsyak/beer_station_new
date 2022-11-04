import styled from 'styled-components'
import {FlexContainer, ImageContainer} from '../../styles/StyledElements'
import screen_breakpoint from '../../styles/StyledElements/screen_breakpoints'

export const NavigationWrapper = styled(FlexContainer)`
  margin-bottom: .8rem;

  ${ screen_breakpoint.sm } {
    margin-bottom: 1.3rem;
  }
`
export const IconsWrapper = styled(FlexContainer)`
  position: relative;
  width: 7rem;

  ${ screen_breakpoint.md } {
    width: 9rem;
  }
`
export const LogoImage = styled(ImageContainer)`
  position: relative;
  margin-bottom: .8rem;
  width: 8rem;
  border-radius: 50%;
  background-color: #fdfdfdb0; 
  box-shadow: 0 0 1.2rem 0 beige;

  ${ screen_breakpoint.sm } {
    margin-bottom: 0;
    width: 10rem;
  }

  ${ screen_breakpoint.xl } {
    margin-right: 23rem;
  }

  &::before {
    display: none;

    ${ screen_breakpoint.xl } {
      content: 'BeerStation';
      display: block;
      position: absolute;
      top: 44%;
      right: -24.5rem;
      font-family: "Jacques Francois Shadow";
      font-size: 3.8rem;
      transform: translateY(-50%);
      color: ${({theme}) => theme.colors.yellow_light};
    }
    
  }
`

export const WorkTimeInfoWrapper = styled.div`
  width: 13rem;

  ${ screen_breakpoint.xs } {
    width: 17rem;
  }

  ${ screen_breakpoint.xl } {
    display: flex;
    width: 29rem;
    font-size: 3rem;
  }
`
export const WorkTimeTitle = styled.p`
  ${ screen_breakpoint.xl } {
    margin-right: .5rem;
  }
`
export const WorkTime = styled.p`
  font-size: 1.9rem;

  ${ screen_breakpoint.sm } {
    font-size: 2.6rem
  }
`

export const MenuWrapper = styled(FlexContainer)`
  display: none;

  ${ screen_breakpoint.md } {
    display: flex;
    width: 19rem;
  }

  ${ screen_breakpoint.xl } {
    font-size: 3.3rem;
  }
`
export const MenuLink = styled.a`
  text-decoration: none;
  font-size: 4.5rem;
  color: ${({theme}) => theme.colors.gold};
  text-shadow: .1rem .2rem .2rem #431d00;
  transition: all .15s ease-in-out;

  &:hover {
    cursor: pointer;
    color: ${({theme}) => theme.colors.yellow};
    text-shadow: 0.1rem 0.2rem .3rem #431d00;
  }
`
