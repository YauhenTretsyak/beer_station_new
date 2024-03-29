import styled from 'styled-components'
import {FlexContainer, ImageContainer} from '../../styles/StyledElements/index'
import screen_breakpoint from '../../styles/StyledElements/screen_breakpoints'

export const CarouselWrapper = styled.div`
  & .swiper {
    height: 20rem;

    ${ screen_breakpoint.md } {
      height: auto;
    }

    ${ screen_breakpoint.xl } {
        overflow: ${({isMobileMode}) => (isMobileMode ? 'hidden' : 'unset')};
      }

    & > .swiper-wrapper {
      align-items: center;

      ${ screen_breakpoint.xl } {
        ${({isMobileMode}) => (isMobileMode 
        ? 'flex-wrap:nowrap; transform: translate3d(-1200px, 0px, 0px);' 
        : 'flex-wrap:wrap; transform: translate3d(0, 0, 0) !important; justify-content:space-between;')
};
      }

      & > .swiper-slide {
        display: flex;
        justify-content: center;
        
        ${ screen_breakpoint.xl } {
            width: ${({isMobileMode}) => (isMobileMode ? '40rem' : '29rem !important')};
        }
      }

      & > .swiper-slide-duplicate {
        ${ screen_breakpoint.xl } {
          display: ${({isMobileMode}) => (isMobileMode ? 'flex' : 'none')};
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

export const ArrowsBlock = styled(FlexContainer)`
  margin: 0 auto;
  margin-top: 3px;
  width: 100px;
`
export const ArrowBox = styled(ImageContainer)`
  position: relative;
  width: 32px;
  height: 32px;
  outline: none;
  color: ${({theme}) => theme.colors.gold};

  ${ screen_breakpoint.xl } {
    display: ${({isMobileMode}) => (isMobileMode ? 'flex' : 'none')};
  }

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
export const ArrowNext = styled(ArrowBox)`
  display: ${({isMobileMode}) => (isMobileMode ? 'flex' : 'none')};
  outline: none;
  &:hover {
    ${ screen_breakpoint.lg } {
      & > svg {
      transform: translate(-35%, -50%);
    }
    }
  }
`
export const ArrowPrev = styled(ArrowBox)`
  display: ${({isMobileMode}) => (isMobileMode ? 'flex' : 'none')};
  outline: none;
  &:hover {
    ${ screen_breakpoint.lg } {
      & > svg {
        transform: translate(-65%, -50%);
      }
    }
  }
`

export const DotsWrapper = styled(FlexContainer)`
  display: none;
  flex-direction: row;
  justify-content: center;

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
export const Dot = styled.div``
