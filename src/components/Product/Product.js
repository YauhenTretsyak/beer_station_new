import { useContext, useState } from 'react';
import useLocation from '../../hooks/useLocation';
import useLanguage from '../../hooks/useLanguage';
import { v4 as uuidv4 } from 'uuid';
import { SwitchContext } from '../../context/SwitchContext';
import { BeerSlide, Slider } from '../../common-components';
import { SwiperSlide } from 'swiper/react/swiper-slide';
import { productData, beerSliderSettings } from './product.data';
import { beerSlidesData } from '../../dataComponents/beerSlides.data';


import styled from 'styled-components'
import { SectionContainer, SectionTitle } from '../../styles/StyledElements'

const ProductContainer = styled(SectionContainer)``
const ProductTitle = styled(SectionTitle)``

const Product = () => {

  const { langSwitch, locationSwitch } = useContext(SwitchContext);
  const [ isMobileMode, setIsMobileMode ] = useState(true);
  const title = useLanguage(productData, langSwitch);
  const slidesData = useLocation(beerSlidesData, locationSwitch.location)


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

  const slides = slidesData.map(item => {
    return(
      <SwiperSlide key={ uuidv4() }>
        <BeerSlide 
          linkToCard={ `/beer_page/${ locationSwitch.location }/${ item.id }` }
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
        { title }
        <span> { locationSwitch.address }</span>
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