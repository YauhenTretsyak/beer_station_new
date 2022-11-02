import styled from 'styled-components'
import {SectionContainer, ImageContainer} from '../../styles/StyledElements'
import screen_breakpoints from '../../styles/StyledElements/screen_breakpoints'

const FooterContainer = styled(SectionContainer)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap-reverse;

  ${ screen_breakpoints.sm } {
    justify-content: space-between;
    flex-wrap: nowrap;
  }
`
const FixBug = styled.p`
  position: absolute;
  left: -1000rem;
  font-size: .1rem;
`

const CopyRights = styled.p`
  font-size: 1.6rem;
  text-align: center;

  ${ screen_breakpoints.sm } {
    text-align: left;
  }

  ${ screen_breakpoints.lg } {
    font-size: 2.5rem;
  }
`

const AuthorLink = styled.a`
  padding-left: .9rem;
  text-decoration: none;
  font-family: 'Indie Flower', sans-serif;
  color: ${({theme}) => theme.colors.silver};
`

const Logo = styled(ImageContainer)`
  margin-bottom: 1rem;
  width: 3.4rem;
  height: 3.4rem;
  
  ${ screen_breakpoints.sm } {
    margin-bottom: 0;
  }

  & > img {
    border-radius: 50%;
    background-color: #fdfdfdb0;
    box-shadow: 0 0 1.2rem 0 beige;
  }
`

export { 
    FooterContainer, 
    FixBug, 
    CopyRights, 
    AuthorLink, 
    Logo
}