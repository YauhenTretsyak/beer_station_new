import { NavLink } from "react-router-dom";
import flagsListData from "../../dataComponents/flagList.data";
import styled from "styled-components";
import { FlexContainer, ImageContainer } from "../../styles/StyledElements";
import screen_breakpoints from '../../styles/StyledElements/screen_breakpoints'

import { memo, useEffect, useState } from "react";

const Name = styled.p`
  margin-bottom: .7rem;
  width: 15rem;
  min-height: 2.875rem;
  ${({nameRegularSize}) => nameRegularSize ?
    'font-size: 2.5rem;'
    :
    'font-size: 1.5rem; line-height: 2.7rem;'
  }
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  ${ screen_breakpoints.sm } {
    width: 12rem;
  }

  ${ screen_breakpoints.xl } {
    width: 16rem;
    font-size: ${({nameRegularSize}) => nameRegularSize ?
      '2.5rem'
      :
      '2rem'
    };
  }
`

const SlideWrapper = styled(NavLink)`
  position: relative;
  display: block;
  margin-top: 1.7rem;
  margin-bottom: 1.7rem;
  padding: 1.5rem 2.6rem;
  width: 100%;
  max-width: 26rem;
  height: 16.7rem;
  border-radius: 1.4rem;
  text-decoration: none;
  background-color: #312f2f;
  box-shadow: 0 0 .7rem .1rem ${({theme}) => theme.colors.yellow};
  transition: all .2s ease-in-out;

  ${ screen_breakpoints.sm } {
    max-width: 23rem;
  }

  ${ screen_breakpoints.md } {
    max-width: 26rem;
  }

  ${ screen_breakpoints.lg } {
    max-width: 22.5rem;

    & p {
      transition: all .2s ease-in-out;
    }

    &:hover {
      cursor: pointer;
      background-color: #4e3308;
      box-shadow: 0 0 1rem .3rem #ffe277;

      & p {
        color: #d99f47;
        text-shadow: .5rem .7rem .1rem #000;
      }

      & img {
        margin-bottom: .5rem;
        max-width: 103%;
        box-shadow: .6rem .6rem .2rem .1rem #000;
      }

      &::before, &::after {
        height: 8.3rem;
        box-shadow: .5rem .5rem 0 0 #000;
      }
    }
  }

  ${ screen_breakpoints.xl } {
    margin-top: 0;
    margin-bottom: 3rem;
    padding: 1.5rem 4rem;
    max-width: 29rem;
  }

  &:before {
    content: '';
    position: absolute;
    top: 50%;
    left: 1.7rem;
    width: .3rem;
    height: 8rem;
    border-radius: .4rem;
    background-color: ${({theme}) => theme.colors.brown_light};
    transform: translateY(-50%);
    transition: all .2s ease-in-out;
  }

  &:after {
    content: '';
    position: absolute;
    top: 50%;
    right: 1.7rem;
    width: .31rem;
    height: 8rem;
    border-radius: .4rem;
    background-color: ${({theme}) => theme.colors.brown_light};
    transform: translateY(-50%);
    transition: all .2s ease-in-out;
  }

  & p {
    color: ${({theme}) => theme.colors.orange};
  }
`
const TopCardWrapper = styled(FlexContainer)`
  margin-bottom: 1.5rem;
  justify-content: space-around;
`
const CountryWrapper = styled.div`
  margin-right: .5rem;
`
const CountryFlag = styled(ImageContainer)`
  width: 5rem;

  ${ screen_breakpoints.xl } {
    width: 5rem;
  }

  & > img {
    margin-bottom: .6rem;
    transition: all .2s ease-in-out;
  }
`
const CardNumber = styled.p`
  text-align: center;
  font-size: 3.7rem;
  color: ${({theme}) => theme.colors.white} !important;
`
const BeerInfoWrapper = styled.div`
  text-align: center;
`
const SlideTitle = styled.p`
  font-size: 1.9rem;
  margin-bottom: .7rem;
`

const BeerType = styled.p`
  font-size: 1.8rem;
`
const BottomCardWrapper = styled(FlexContainer)`
  padding-top: 1.5rem;
  border-top: .1rem solid ${({theme}) => theme.colors.red};
`
const CostInfoWrapper = styled(FlexContainer)`
  font-size: 1.6rem;

  ${ screen_breakpoints.xl } {
    font-size: 1.8rem;
  }
`
const BeerValue = styled.p``
const BeerCost = styled.p``




const BeerSlide = (props) => {

  const [nameRegularSize, setNameRegularSize] = useState(true);

  const { linkToCard, cardNumber, title, name, type, vol03, vol05, vol1, country } = props;

  const flagImage = flagsListData.filter(el => el.id === country).map(item => {
    return item.country
  })

  useEffect(() => {
    if(name.length >=14 ) {
      setNameRegularSize(false)
    } else {
      setNameRegularSize(true)
    }
  }, [name])

  return(
    <SlideWrapper to={`${ linkToCard }`}>
      <TopCardWrapper>
        <CountryWrapper>
          <CountryFlag>
            <img src={ flagImage } alt="country's flag" />
          </CountryFlag>
          <CardNumber>
            #{ cardNumber }
          </CardNumber>
        </CountryWrapper>
        <BeerInfoWrapper>
          <SlideTitle>
            { title || '--' }
          </SlideTitle>
          <Name
            nameRegularSize={ nameRegularSize }
          >
            { name || '--' }
          </Name>
          <BeerType>
            { type || '--' }
          </BeerType>
        </BeerInfoWrapper>
      </TopCardWrapper>
      <BottomCardWrapper>
        <CostInfoWrapper>
          <BeerValue>
            0.3L - 
          </BeerValue>
          <BeerCost>
            { vol03 || '--' } zł
          </BeerCost>
        </CostInfoWrapper>
        <CostInfoWrapper>
          <BeerValue>
            0.5L - 
          </BeerValue>
          <BeerCost>
            { vol05 || '--' } zł
          </BeerCost>
        </CostInfoWrapper>
        <CostInfoWrapper>
          <BeerValue>
            1L - 
          </BeerValue>
          <BeerCost>
             { vol1 || '--' } zł
          </BeerCost>
        </CostInfoWrapper>
      </BottomCardWrapper>
    </SlideWrapper>
  )
}

export default memo(BeerSlide);