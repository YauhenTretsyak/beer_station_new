import styled from 'styled-components'
import {FlexContainer, ImageContainer} from '../../styles/StyledElements'
import screen_breakpoints from '../../styles/StyledElements/screen_breakpoints'

export const Card = styled.div`
  position: relative;
  display: block;
  margin-bottom: 2rem;
  padding: 1.5rem 2.6rem;
  width: 100%;
  max-width: 26rem;
  height: 16.7rem;
  border-radius: 1.4rem;
  text-decoration: none;
  background-color: #4e3308;
  box-shadow: 0 0 1rem .3rem #ffe277;
  transition: all .2s ease-in-out;

  ${ screen_breakpoints.sm } {
    max-width: 23rem;
  }

  ${ screen_breakpoints.md } {
    margin-bottom: 0;
    max-width: 26rem;
  }

  ${ screen_breakpoints.lg } {
    max-width: 22.5rem;
  }

  ${ screen_breakpoints.xl } {
    margin-top: 0;
    padding: 3rem 4rem;
    max-width: 49rem;
    height: 28.7rem;
  }

  &:before {
    content: '';
    position: absolute;
    top: 50%;
    left: 1.7rem;
    width: .3rem;
    height: 10rem;
    border-radius: .4rem;
    background-color: ${({theme}) => theme.colors.brown_light};
    box-shadow: .5rem .5rem 0 0 #000;
    transform: translateY(-50%);
    transition: all .2s ease-in-out;

    ${ screen_breakpoints.xl } {
      height: 20.3rem;
    }
  }

  &:after {
    content: '';
    position: absolute;
    top: 50%;
    right: 1.7rem;
    width: .31rem;
    height: 10rem;
    box-shadow: .5rem .5rem 0 0 #000;
    border-radius: .4rem;
    background-color: ${({theme}) => theme.colors.brown_light};
    transform: translateY(-50%);
    transition: all .2s ease-in-out;

    ${ screen_breakpoints.xl } {
      height: 20.3rem;
    }
  }

  & p {
      text-shadow: .5rem .7rem .1rem #000;
      transition: all .2s ease-in-out;
    }
`
export const TopWrapper = styled(FlexContainer)`
  margin-bottom: 1.5rem;
  justify-content: space-around;
  flex-wrap: nowrap; 

  ${ screen_breakpoints.xl } {
    margin-bottom: 2rem;
  }
`
export const Country = styled.div`
  margin-right: .5rem;
`
export const Flag = styled(ImageContainer)`
  width: 5rem;

  ${ screen_breakpoints.xl } {
    margin-bottom: .5rem;
    width: 8rem;
  }

  & > img {
    margin-bottom: .5rem;
    box-shadow: .6rem .6rem .2rem .1rem #000;
  }
`
export const CardNumber = styled.p`
  text-align: center;
  color: ${({theme}) => theme.colors.white} !important;

  ${ screen_breakpoints.xl } {
    font-size: 4.5rem;
  }
`
export const Inner = styled.div`
  text-align: center;
  width: 100%;
  max-width: 29rem;
  color: #d99f47;
`
export const Title = styled.p`
  font-size: 1.9rem;
  margin-bottom: .7rem;
  color: #d99f47;

  ${ screen_breakpoints.xl } {
    font-size: 3rem;
  }
`

export const Name = styled.p`
  margin-bottom: .7rem;
  width: 15rem;
  min-height: 2.875rem;
  font-size: 1.5rem; line-height: 2.7rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  ${ screen_breakpoints.sm } {
    width: 12rem;
  }

  ${ screen_breakpoints.xl } {
    width: 100%;
    font-size: 3.5rem;
    line-height: 4.5rem;
  }
`

export const BeerType = styled.p`
  font-size: 1.8rem;

  ${ screen_breakpoints.xl } {
    font-size: 3rem;
  }
`
export const BottomWrapper = styled(FlexContainer)`
  padding-top: 1.5rem;
  border-top: .1rem solid ${({theme}) => theme.colors.red};

  ${ screen_breakpoints.xl } {
    padding-top: 2rem;
  }
`
export const CostInfo = styled(FlexContainer)`
  font-size: 1.6rem;

  ${ screen_breakpoints.xl } {
    font-size: 3.5rem;
  }
`
export const BeerValue = styled.p`
  font-weight: 300;
`
export const BeerCost = styled.p`
  color: #ffeb00;
`
