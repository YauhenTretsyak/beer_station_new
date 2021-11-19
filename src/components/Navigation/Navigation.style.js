import styled from 'styled-components';
import { FlexContainer, ImageContainer } from '../../styles/StyledElements';
import screen_breakpoint from '../../styles/StyledElements/screen_breakpoints';

const NavigationWrapper = styled(FlexContainer)``
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

  &::before {
    content: 'BeerStation';
    position: absolute;
    top: 50%;
    right: -19.5rem;
    font-family: "Jacques Francois Shadow";
    font-size: 2.9rem;
    transform: translateY(-50%);
  }
`

const WorkTimeInfoWrapper = styled.div`
  width: 13rem;

  ${ screen_breakpoint.xs } {
    width: 17rem;
  }
`
const WorkTimeTitle = styled.p``
const WorkTime = styled.p``

const MenuWrapper = styled(FlexContainer)`
  display: none;

  ${ screen_breakpoint.md } {
    display: flex;
  }
`
const MenuLink = styled.a``

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

