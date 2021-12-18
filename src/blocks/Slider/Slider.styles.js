import styled from 'styled-components';
import { FlexContainer, ImageContainer } from '../../styles/StyledElements/index';

const CarouselWrapper = styled.div`
  & .swiper-container {
    padding-bottom: 20px;

    & > .swiper-wrapper {
      & > .swiper-slide {
        display: flex;
        justify-content: center;
        
        @media only screen and (min-width: 1104px) {
          width: 400px;
        }
      }
    }

    & > .swiper-button-prev, .swiper-button-next {
      display: none;

      @media only screen and (min-width: 420px) {
        display: block;
      }
    }

    & > .swiper-pagination-bullets {
        bottom: 0;
        
        @media only screen and (min-width: 576px) {
          display: none;
        } 
    }
  } 
`

const ArrowsBlock = styled(FlexContainer)`
  margin: 0 auto;
  margin-top: 3px;
  width: 100px;
`
const ArrowBox = styled(ImageContainer)`
  position: relative;
  width: 32px;
  height: 32px;
  outline: none;

  & > svg {
    position: absolute;
    top: 50%;
    left: 50%;
    max-width: 100%;
    transform: translate(-50%, -50%);
    transition: all 0.3s ease-in-out;

    &:hover {
      cursor: pointer;
      color: ${({theme}) => theme.colors.color_blue};
    }
  }
`
const ArrowNext = styled(ArrowBox)`
  &:hover {
    & > svg {
      transform: translate(-35%, -50%);
    }
  }
`
const ArrowPrev = styled(ArrowBox)`
  &:hover {
    & > svg {
      transform: translate(-65%, -50%);
    }
  }
`

const DotsWrapper = styled(FlexContainer)`
  flex-direction: row;
  justify-content: center;
  height: 15px;

  @media only screen and (min-width: 576px) {
    display: none;
  }

  & > .dots {
    display: flex;
    align-items: center;
    height: 100%;

    & > .swiper-pagination-bullet {
      display: block;
      margin: 0 3px;
      outline: none;
      border: 1px solid black;
      background-color: ${({theme}) => theme.colors.color_blue};
      transition: all 0.2s ease-in-out;
    }

    & > .swiper-pagination-bullet-active {
      width: 10px;
      height: 10px;
      border: 1px solid antiquewhite;
      background-color: ${({theme}) => theme.colors.color_blue};
      box-shadow: 1px 2px 3px 1px #30303f;
    } 
  }
`
const Dot = styled.div``

export {
  CarouselWrapper,
  ArrowsBlock,
  ArrowNext,
  ArrowPrev,
  DotsWrapper,
  Dot
}