import { useState, useEffect, useContext } from "react";
import { v4 as uuidv4 } from 'uuid'
import { SwitchContext } from '../../hoc/SwitchContext'
import { Slider, GallerySlide } from "../../common-components";
import { SwiperSlide } from 'swiper/react/swiper-slide';
import gallerySliderSettings from "../../dataComponents/gallerySliderSettings.data";
import gallerySlidesData from "../../dataComponents/gallerySlidesData";

import styled from 'styled-components';
import { SectionContainer, SectionTitle } from "../../styles/StyledElements";

const GalleryContainer = styled(SectionContainer)``

const GalleryTitle = styled(SectionTitle)``

const Gallery = () => {
  const { langSwitch, locationSwitch } = useContext(SwitchContext);
  const [slidesData, setSlidesData] = useState(gallerySlidesData.kepna);
  const [galleryTitle, setGalleryTitle] = useState('Галерея');
  const [location, setLocation] = useState(' Kępna, 15');

  useEffect(() => {
    if(locationSwitch) {
      setSlidesData(gallerySlidesData.kepna)
      setLocation(' Kępna, 15');
    } else {
      setSlidesData(gallerySlidesData.lwowska)
      setLocation(' Lwowska, 17');
    }
  }, [locationSwitch])

  useEffect(() => {
    switch (langSwitch) {
      case 'PL':
        // productTitle = 'Piwo';
        setGalleryTitle('Galeria')
        break
      case 'RU': 
        // productTitle = 'Пиво';
        setGalleryTitle('Галерея')
        break
      default: 
        // productTitle = 'Piwo';
        setGalleryTitle('Galeria')
        break
    }
  }, [langSwitch])

  const slides = slidesData.map(item => {
    return(
      <SwiperSlide key={ uuidv4() }>
        <GallerySlide 
          slideImage={ item.slide }
        />
      </SwiperSlide>
    )
  })

  return(
    <GalleryContainer>
      <GalleryTitle>
        { galleryTitle }
        <span>{ location }</span>
      </GalleryTitle>
      <Slider
        sliderSettings={ gallerySliderSettings }
        slides={ slides }
        isMobileMode={ true }
      />
    </GalleryContainer>
  )
}

export default Gallery;