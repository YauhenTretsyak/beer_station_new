import { Swiper } from 'swiper/react/swiper';
import SwiperCore, { Navigation, Pagination, A11y } from 'swiper'
import {
  CarouselWrapper,
  ArrowsBlock,
  ArrowNext,
  ArrowPrev,
  DotsWrapper,
  Dot
} from './Slider.styles.js';

// Import Swiper styles
import 'swiper/swiper-bundle.css';
import 'swiper/modules/navigation/navigation.min.css';
import 'swiper/modules/pagination/pagination.min.css';
import { useRef } from 'react';

const arrowNextIcon = <svg height="32" viewBox="0 0 32 32" width="32" xmlns="http://www.w3.org/2000/svg"><path d="m19 8.92893219 7.0710678 7.07106781-7.0710678 7.0710678-1.4142136-1.4142136 4.6562136-4.656922-16.242.0000678v-2l16.242-.0000678-4.6562136-4.6567864z" fill="currentColor"/></svg>;
const arrowPrevIcon = <svg height="32" viewBox="0 0 32 32" width="32" xmlns="http://www.w3.org/2000/svg"><path d="m19 9 7.0710678 7.0710678-7.0710678 7.0710678-1.4142136-1.4142135 4.6562136-4.6569221-16.242.0000678v-2l16.242-.0000678-4.6562136-4.6567864z" fill="currentColor" transform="matrix(-1 0 0 1 32.071068 0)"/></svg>;



const Slider = ({ ...props }) => {

  const settings = props.sliderSettings;
  const sliderEl = useRef(null)

  SwiperCore.use([Navigation, Pagination, A11y]); 
  const arrowPrevClassName = settings.navigation.prevEl.slice(1);
  const arrowNextClassName = settings.navigation.nextEl.slice(1);
  const dotsClassName = settings.pagination.el.slice(1);

  const destroy = () => {
    // const swiper = document.querySelector('.swiper').swiper;
    // swiper.disable()
    // console.log(sliderEl.current)
    const swiper = sliderEl.current.querySelector('.swiper').swiper;
    // console.log(swiper)
    swiper.disable()
  }
    
  // console.log(sliderEl.current)

  return(
    <CarouselWrapper ref={ sliderEl }  onLoad={destroy}>
      <Swiper 
        
        id={ settings.id }
        slidesPerView={ settings.slidesPerView || 1 }
        loop={ settings.loop || true }
        navigation={ settings.navigation || null }
        pagination={ settings.pagination || null }
        breakpoints={ settings.breakpoints || null }
      >
        { props.slides }
      </Swiper>
      <DotsWrapper>
        <Dot className={ dotsClassName } />
      </DotsWrapper>
      <ArrowsBlock>
        <ArrowPrev className={ arrowPrevClassName }>
          { arrowPrevIcon }
        </ArrowPrev>
        <ArrowNext className={ arrowNextClassName }>
          { arrowNextIcon }
        </ArrowNext>
      </ArrowsBlock>
    </CarouselWrapper>
  )
}

export default Slider;