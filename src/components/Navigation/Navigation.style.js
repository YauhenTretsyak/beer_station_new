import styled from 'styled-components';
import { FlexContainer, ImageContainer } from '../../styles/StyledElements';
import screen_breakpoint from '../../styles/StyledElements/screen_breakpoints';

const NavigationWrapper = styled(FlexContainer)`
  margin-bottom: 1.3rem;
`
const IconsWrapper = styled(FlexContainer)`
  position: relative;
  width: 7rem;

  ${ screen_breakpoint.md } {
    width: 9rem;
  }
`
const LogoImage = styled(ImageContainer)`
  position: relative;
  width: 8rem;

  ${ screen_breakpoint.sm } {
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
    }
    
  }
`

const WorkTimeInfoWrapper = styled.div`
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
const WorkTimeTitle = styled.p`
  ${ screen_breakpoint.xl } {
    margin-right: .5rem;
  }
`
const WorkTime = styled.p`
  font-size: 1.9rem;

  ${ screen_breakpoint.sm } {
    font-size: 2.6rem
  }
`

const MenuWrapper = styled(FlexContainer)`
  display: none;

  ${ screen_breakpoint.md } {
    display: flex;
    width: 13rem;
  }

  ${ screen_breakpoint.xl } {
    width: 20rem;
    font-size: 3.3rem;
  }
`
const MenuLink = styled.a`
  text-decoration: none;
  font-size: 4.5rem;
  color: ${({theme}) => theme.colors.brown_dark};
  text-shadow: .1rem .2rem .2rem #431d00;
  transition: all .15s ease-in-out;

  &:hover {
    color: ${({theme}) => theme.colors.gold};
    text-shadow: 0.1rem 0.2rem .3rem #431d00;
  }
`

export { 
  NavigationWrapper, 
  IconsWrapper, 
  LogoImage,
  WorkTimeInfoWrapper,
  WorkTimeTitle,
  WorkTime, 
  MenuWrapper,
  MenuLink
};

