import { useContext } from 'react';
import { useParams } from "react-router-dom";
import { SwitchContext } from '../../hoc/SwitchContext';
import { beerSlidesData } from "../../dataComponents/beerSlides.data";
import screen_breakpoints from '../../styles/StyledElements/screen_breakpoints';

import styled from 'styled-components'
import { BeerCard } from '../../blocks'
import { SectionContainer } from "../../styles/StyledElements";

const BeerCardPageWrapper = styled(SectionContainer)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  ${ screen_breakpoints.md } {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }
`

const BeersInteresting = styled.p`
  padding: 2rem;
  width: 100%;
  max-width: 26rem;
  border-radius: 1.4rem;
  border: .1rem solid ${({theme}) => theme.colors.silver};
  font-size: 1.5rem;
  box-shadow: 0 0 1rem 0.3rem ${({theme}) => theme.colors.silver};
  color: ${({theme}) => theme.colors.silver};

  ${ screen_breakpoints.md } {
    max-width: 40rem;
  }

  ${ screen_breakpoints.lg } {
    max-width: 42.7rem;
    font-size: 1.9rem;
  }

  ${ screen_breakpoints.xl } {
    max-width: 50.7rem;
    font-size: 2.5rem;
  }

  ${ screen_breakpoints.xxl } {
    max-width: 66.7rem;
  }
`

const BeerCardPage = (props) => {
  const { locationSwitch } = useContext(SwitchContext);
  let params = useParams();
  const cardNumber = +params.id;

  const beerInfo = locationSwitch ? beerSlidesData.kepna : beerSlidesData.lwowska;
  console.log( cardNumber)

  const beer = beerInfo.find(beerCard=>beerCard.id === cardNumber);



  return(
    <BeerCardPageWrapper>
      <BeerCard
        country={ beer.country }
        cardNumber={ beer.id }
        title={ beer.title }
        name={ beer.name }
        type={ beer.type }
        vol03={ beer.vol03 }
        vol05={ beer.vol05 }
        vol1={ beer.vol1 }
      />

      <BeersInteresting>
        Ежегодно 17 марта в мире отмечается ещё один праздник, связанный с пивом — День Святого Патрика, крестителя ирландцев. Его придумали ирландские эмигранты в США в XVIII-XIX веках, желая сохранить память о своих корнях. О самом Патрике достоверно известно крайне мало, некоторые исследователи даже сомневаются в его существовании. Исторически он не был связан с алкогольными напитками, а традиция пить крепкое тёмное пиво в этот день достаточно новая и, возможно, связана с продвижением бренда Guinness. 
      </BeersInteresting>
    </BeerCardPageWrapper>
  )
}

export default BeerCardPage;