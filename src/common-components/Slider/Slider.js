import {useEffect, useRef} from 'react'
import {Swiper} from 'swiper/react/swiper'
import SwiperCore, {Navigation, Pagination, A11y} from 'swiper'
// Import Swiper styles
import 'swiper/swiper-bundle.css'
import 'swiper/modules/navigation/navigation.min.css'
import 'swiper/modules/pagination/pagination.min.css'
import {
    CarouselWrapper,
    ArrowsBlock,
    ArrowNext,
    ArrowPrev,
    DotsWrapper,
    Dot
} from './Slider.styles.js'


const arrowNextIcon = <svg height="32" viewBox="0 0 32 32" width="32" xmlns="http://www.w3.org/2000/svg"><path d="m19 8.92893219 7.0710678 7.07106781-7.0710678 7.0710678-1.4142136-1.4142136 4.6562136-4.656922-16.242.0000678v-2l16.242-.0000678-4.6562136-4.6567864z" fill="currentColor" /></svg>
const arrowPrevIcon = <svg height="32" viewBox="0 0 32 32" width="32" xmlns="http://www.w3.org/2000/svg"><path d="m19 9 7.0710678 7.0710678-7.0710678 7.0710678-1.4142136-1.4142135 4.6562136-4.6569221-16.242.0000678v-2l16.242-.0000678-4.6562136-4.6567864z" fill="currentColor" transform="matrix(-1 0 0 1 32.071068 0)" /></svg>


const Slider = (props) => {

    const {sliderSettings, slides, isMobileMode} = props

    const settings = sliderSettings
    const sliderEl = useRef(null)

    SwiperCore.use([Navigation, Pagination, A11y]) 
  
    const arrowPrevClassName = settings.navigation ? settings.navigation.prevEl.slice(1) : null
    const arrowNextClassName = settings.navigation ? settings.navigation.nextEl.slice(1) : null
    const dotsClassName = settings.pagination ? settings.pagination.el.slice(1) : null

    const initSlider = () => {
        const swiper = sliderEl.current.querySelector('.swiper').swiper

        if (isMobileMode) {
            swiper.enable()
        } else {
            swiper.disable()
        }
    }

    useEffect(() => {
        initSlider()
    }, [isMobileMode])

    return (
        <CarouselWrapper 
            isMobileMode={ isMobileMode }
            ref={ sliderEl } 
        >
            <Swiper   
                id={ settings.id }
                slidesPerView={ settings.slidesPerView || 1 }
                loop={ settings.loop || true }
                navigation={ settings.navigation || false }
                pagination={ settings.pagination || false }
                breakpoints={ settings.breakpoints || false }
            >
                { slides }
            </Swiper>
            <DotsWrapper>
                <Dot className={ dotsClassName } />
            </DotsWrapper>
            <ArrowsBlock>
                <ArrowPrev isMobileMode={ isMobileMode } className={ arrowPrevClassName }>
                    { arrowPrevIcon }
                </ArrowPrev>
                <ArrowNext isMobileMode={ isMobileMode } className={ arrowNextClassName }>
                    { arrowNextIcon }
                </ArrowNext>
            </ArrowsBlock>
        </CarouselWrapper>
    )
}

export default Slider