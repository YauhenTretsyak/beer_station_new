import { useContext, useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { SwitchContext } from '../../hoc/SwitchContext'
import { BeerSlide, Slider } from '../../blocks/'
import { SwiperSlide } from 'swiper/react/swiper-slide';
import { beerSlidesData } from '../../dataComponents/beerSlides.data'
import beerSliderSettings from '../../dataComponents/beerSliderSettings.data'

import styled from 'styled-components'
import { SectionContainer } from '../../styles/StyledElements'

const ProductContainer = styled(SectionContainer)``

const Product = () => {

  let productTitle;
  const { langSwitch, locationSwitch } = useContext(SwitchContext);
  const [ isMobileMode, setIsMobileMode ] = useState(true);

  const slidesData = locationSwitch ? beerSlidesData.kepna : beerSlidesData.lwowska;

  // const wdth = document.querySelector('.productContainer').addEventListener('resize', () => {
  //   return(
  //     document.querySelector('.productContainer').clientWidth
  //   )
  // })

  // window.addEventListener('resize', () => {
  //   if (window.innerWidth >= 1104) {
  //     setIsMobileMode(false);
  //   }
  //   return window.innerWidth
  // })

  // useEffect(() => {
  //   windowSize >= 1104 ? setIsMobileMode(false) : setIsMobileMode(true)
  //   console.log(isMobileMode)
  // }, [isMobileMode])

  // useEffect(() => {
  //   windowSize < 1104 ? setIsMobileMode(true) : setIsMobileMode(false)
  // },[isMobileMode])

  console.log(window.innerWidth);
  
  switch (langSwitch) {
    case 'PL':
      productTitle = 'Piwo';
      break
    case 'RU': 
      productTitle = 'Пиво';
      break
    default: 
      productTitle = 'Piwo';
      break
  }

  const slides = slidesData.map(item => {
    return(
      <SwiperSlide key={ uuidv4() }>
        <BeerSlide 
          cardNumber={ item.cardNumber }
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
    <ProductContainer>
      { productTitle }
      <Slider 
        sliderSettings={ beerSliderSettings }
        slides={ slides }
      />
    </ProductContainer>
  )
}

export default Product;