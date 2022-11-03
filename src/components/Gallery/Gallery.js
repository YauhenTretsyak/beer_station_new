import {useSelector} from 'react-redux'
import useLocation from '../../hooks/useLocation'
import useLanguage from '../../hooks/useLanguage'
import {v4 as uuidv4} from 'uuid'
import {Slider, GallerySlide} from '../../common-components'
import {SwiperSlide} from 'swiper/react/swiper-slide'
import {galleryData, gallerySliderSettings, gallerySlidesData} from './gallery.data'
import * as Styled from './GalleryStyles'

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
        <Styled.Container>
            <Styled.Title>
                {title}
                <span> {address}</span>
            </Styled.Title>
            <Slider
                sliderSettings={gallerySliderSettings}
                slides={slides}
                isMobileMode={true}
            />
        </Styled.Container>
    )
}

export default Gallery
