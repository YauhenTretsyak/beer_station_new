import styled from 'styled-components';
import screen_breakpoint from '../../styles/StyledElements/screen_breakpoints';

const IconLinkWrapper = styled.a`
  display: block;
  width: 3rem;
  color: ${({theme}) => theme.colors.brown};
  transition: all .3s ease-in-out;

  ${ screen_breakpoint.md } {
    width: 4rem;
  }

  &:hover {
    color: ${({theme}) => theme.colors.orange};
  }
`

const IconLink = (props) => {

  const { link, icon } = props;

  return (
    <IconLinkWrapper href={ link } >
      { icon }
    </IconLinkWrapper>
  )
}

export default IconLink;