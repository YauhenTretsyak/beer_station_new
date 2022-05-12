import styled from 'styled-components';
import screen_breakpoint from '../../styles/StyledElements/screen_breakpoints';

const LinkWrapper = styled.a`
  display: block;
  width: 3rem;
  color: ${({theme}) => theme.colors.yellow};
  transition: all .15s ease-in-out;

  ${ screen_breakpoint.md } {
    width: 4rem;
  }

  &:hover {
    color: ${({theme}) => theme.colors.gold};
  }
`

export { LinkWrapper };