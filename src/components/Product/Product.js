import { useContext, useEffect, useState } from 'react'
import { NavLink } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid'
import { SwitchContext } from '../../hoc/SwitchContext'
import { BeerSlide, Slider } from '../../blocks/'
import { SwiperSlide } from 'swiper/react/swiper-slide';
import { beerSlidesData } from '../../dataComponents/beerSlides.data'

import beerSliderSettings from '../../dataComponents/beerSliderSettings.data'


import styled from 'styled-components'
import { SectionContainer, SectionTitle } from '../../styles/StyledElements'

const ProductContainer = styled(SectionContainer)``
const ProductTitle = styled(SectionTitle)`
  font-weight: ${({theme}) => theme.fontWeight.font_weightLight};
  color: ${({theme}) => theme.colors.gold};

  & > span {
    text-shadow: .3rem .4rem .2rem ${({theme}) => theme.colors.black};
    color: #ea8f0a;
  }
`

const Product = () => {

  // let productTitle;
  const { langSwitch, locationSwitch } = useContext(SwitchContext);
  const [ isMobileMode, setIsMobileMode ] = useState(true);
  const [productTitle, setProductTitle] = useState('Пиво');

  const [slidesData, setSlidesData] = useState(beerSlidesData.kepna);
  const [location, setLocation] = useState(' Kępna, 15');

  useEffect(() => {
    if(locationSwitch) {
      setSlidesData(beerSlidesData.kepna)
      setLocation(' Kępna, 15');
    } else {
      setSlidesData(beerSlidesData.lwowska)
      setLocation(' Lwowska, 17');
    }
  }, [locationSwitch])

  const startWidth = () => {
    if (document.documentElement.clientWidth <= 1104) {
      setIsMobileMode(true);
    } else {
      setIsMobileMode(false);
    }
  }

  window.addEventListener('resize', () => {
    startWidth();
  })

  useEffect(() => {
    switch (langSwitch) {
      case 'PL':
        // productTitle = 'Piwo';
        setProductTitle('Piwo')
        break
      case 'RU': 
        // productTitle = 'Пиво';
        setProductTitle('Пиво')
        break
      default: 
        // productTitle = 'Piwo';
        setProductTitle('Piwo')
        break
    }
  }, [langSwitch])

  const slides = slidesData.map(item => {
    return(
      <SwiperSlide key={ uuidv4() }>
        <BeerSlide 
          linkToCard={ `/beer_page/${ locationSwitch ? 'kepna' : 'lwowska'}/${ item.id }` }
          country={ item.country }
          cardNumber={ item.id }
          title={ item.title }
          name={ item.name }
          type={ item.type }
          vol03={ item.vol03 }
          vol05={ item.vol05 }
          vol1={ item.vol1 }
        />
      </SwiperSlide>
    )
  })

  return (
    <ProductContainer onLoad={ startWidth }>
      <ProductTitle>
        { productTitle }
        <span>{ location }</span>
      </ProductTitle>
      
      <Slider 
        isMobileMode={ isMobileMode }
        sliderSettings={ beerSliderSettings }
        slides={ slides }
      />
    </ProductContainer>
  )
}

export default Product;