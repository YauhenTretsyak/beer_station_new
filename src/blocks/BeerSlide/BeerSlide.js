import styled from "styled-components";
import { FlexContainer, ImageContainer } from "../../styles/StyledElements";
import screen_breakpoints from '../../styles/StyledElements/screen_breakpoints'

import PL from '../../assets/flags/PL.png';

const SlideWrapper = styled.a`
  position: relative;
  display: block;
  width: 100%;
  max-width: 20rem;
  border-radius: 2.9rem;
  background-color: #312f2f;
  box-shadow: 0 0 .7rem .1rem ${({theme}) => theme.colors.orange_light};

  ${ screen_breakpoints.xl } {
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
  }

  & p {
    color: ${({theme}) => theme.colors.orange_light};
  }
`
const TopCardWrapper = styled(FlexContainer)`
  margin-bottom: 1.5rem;
`
const CountryWrapper = styled.div`
  margin-right: .5rem;
`
const CountryFlag = styled(ImageContainer)`
  width: 5rem;

  ${ screen_breakpoints.xl } {
    width: 5rem;
  }
`
const CardNumber = styled.p`
  text-align: center;
`
const BeerInfoWrapper = styled.div`
  text-align: center;
`
const SlideTitle = styled.p`
  font-size: 1.9rem;
  margin-bottom: .7rem;
`
const Name = styled.p`
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
  font-size: 1.8rem;
`
const BeerValue = styled.p``
const BeerCost = styled.p``


const BeerSlide = (props) => {

  const { cardNumber, title, name, type, vol03, vol05, vol1 } = props;

  return(
    <SlideWrapper>
      <TopCardWrapper>
        <CountryWrapper>
          <CountryFlag>
            <img src={ PL } alt="country's flag" />
          </CountryFlag>
          <CardNumber>
            #{ cardNumber }
          </CardNumber>
        </CountryWrapper>
        <BeerInfoWrapper>
          <SlideTitle>
            { title || '--' }
          </SlideTitle>
          <Name>
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

export default BeerSlide;