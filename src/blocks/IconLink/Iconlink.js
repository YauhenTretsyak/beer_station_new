import styled from 'styled-components';

const IconLinkWrapper = styled.a`
  display: block;
  width: 2rem;
  color: ${({theme}) => theme.colors.grey};
  transition: all .3s ease-in-out;

  &:hover {
    width: 2.5rem;
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