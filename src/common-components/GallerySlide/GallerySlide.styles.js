import styled from 'styled-components'
import {ImageContainer} from '../../styles/StyledElements'
import slideBg from '../../assets/slide_bg.jpg'
import screen_breakpoints from '../../styles/StyledElements/screen_breakpoints'

const Wrapper = styled(ImageContainer)`
  margin: .6rem;
  padding: 1rem;
  width: 100%;
  max-width: 25.5rem;
  height: 19rem;
  border-radius: .7rem;
  background: url(${ slideBg });
  background-size: cover;
  box-shadow: 0 0 .7rem .1rem ${({theme}) => theme.colors.yellow};

  ${ screen_breakpoints.xs } {

  }

  ${ screen_breakpoints.lg } {
    padding: 2rem;
    max-width: 49rem;
    height: 26rem;
  }

  ${ screen_breakpoints.xl } {
    padding: 3rem;
    height: 35rem;
  }

  & > img {
    border-radius: .7rem;
    box-shadow: .1rem 0 .2rem .2rem #5c0303;
  }
`

const Image = styled.img``

export {Wrapper, Image}