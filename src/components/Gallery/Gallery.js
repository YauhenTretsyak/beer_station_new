import {useSelector} from 'react-redux'
import useLocation from '../../hooks/useLocation'
import useLanguage from '../../hooks/useLanguage'
import {v4 as uuidv4} from 'uuid'
import {Slider, GallerySlide} from '../../common-components'
import {SwiperSlide} from 'swiper/react/swiper-slide'
import {galleryData, gallerySliderSettings, gallerySlidesData} from './gallery.data'

import {Container, Title} from './Gallery.styles'


const Gallery = () => {
    const langSwitch = useSelector(state => state.selectLanguage.langSwitch)
    const {location, address} = useSelector(state => state.actualLocation)
    const slidesData = useLocation(gallerySlidesData, location)
    const title = useLanguage(galleryData, langSwitch)
  
    const slides = slidesData.map(item => (
        <SwiperSlide key={ uuidv4() }>
            <GallerySlide 
                slideImage={ item.slide }
            />
        </SwiperSlide>
    ))

    return (
        <Container>
            <Title>
                {title}
                <span> {address}</span>
            </Title>
            <Slider
                sliderSettings={gallerySliderSettings}
                slides={slides}
                isMobileMode={true}
            />
        </Container>
    )
}

export default Gallery