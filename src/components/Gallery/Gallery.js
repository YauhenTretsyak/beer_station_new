import { useContext } from 'react';
import useLocation from '../../hooks/useLocation';
import useLanguage from '../../hooks/useLanguage';
import { v4 as uuidv4 } from 'uuid';
import { SwitchContext } from '../../context/SwitchContext'
import { Slider, GallerySlide } from '../../common-components';
import { SwiperSlide } from 'swiper/react/swiper-slide';
import { galleryData, gallerySliderSettings, gallerySlidesData} from './gallery.data';

import { Container, Title } from './Gallery.styles';


const Gallery = () => {
  const { langSwitch, locationSwitch } = useContext(SwitchContext);
  const slidesData = useLocation(gallerySlidesData, locationSwitch.location);
  const title = useLanguage(galleryData, langSwitch);
  
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
    <Container>
      <Title>
        { title }
        <span> { locationSwitch.address }</span>
      </Title>
      <Slider
        sliderSettings={ gallerySliderSettings }
        slides={ slides }
        isMobileMode={ true }
      />
    </Container>
  )
}

export default Gallery;